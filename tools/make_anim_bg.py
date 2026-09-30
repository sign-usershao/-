# -*- coding: utf-8 -*-
"""Stamp paper/map texture over titles/dishes/cards so empty regions match the page."""
import os
import shutil
import cv2
import numpy as np

PAGES = os.environ.get("KY_PAGES") or os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "assets",
    "images",
    "pages",
)
DEST = os.environ.get("KY_DEST") or PAGES


def box(img, left, top, width, height, pad=0.2):
    h, w = img.shape[:2]
    x1 = int((left - pad) / 100.0 * w)
    y1 = int((top - pad) / 100.0 * h)
    x2 = int((left + width + pad) / 100.0 * w)
    y2 = int((top + height + pad) / 100.0 * h)
    return max(0, x1), max(0, y1), min(w, x2), min(h, y2)


def sample(img, left, top, width, height):
    x1, y1, x2, y2 = box(img, left, top, width, height, pad=0)
    patch = img[y1:y2, x1:x2]
    if patch.size == 0:
        return np.array([245, 234, 212], np.uint8)
    return np.median(patch.reshape(-1, 3), axis=0).astype(np.uint8)


def blend_fill(img, mask, color):
    m = cv2.GaussianBlur(mask, (21, 21), 0).astype(np.float32) / 255.0
    color_img = np.full_like(img, color, dtype=np.float32)
    out = img.astype(np.float32) * (1.0 - m[..., None]) + color_img * m[..., None]
    return np.clip(out, 0, 255).astype(np.uint8)


def protect_header(mask, img, height=16.4):
    """Keep the Kai Yang / 开阳 title row out of card fill."""
    h, w = img.shape[:2]
    y2 = int(height / 100.0 * h)
    mask[0:y2, :] = 0


def process(src_name, out_name, titles=None, dishes=None, cards=None, paper=None, mapc=None):
    src = os.path.join(PAGES, src_name)
    img = cv2.imread(src)
    if img is None:
        raise SystemExit("cannot read " + src)
    paper_color = sample(img, *(paper or (86, 1, 12, 6)))
    map_color = sample(img, *(mapc or (38, 60, 8, 4))) if dishes else paper_color
    out = img.copy()
    if titles:
        mask = np.zeros(img.shape[:2], np.uint8)
        for t in titles:
            x1, y1, x2, y2 = box(img, *t[:4], pad=0.35)
            cv2.rectangle(mask, (x1, y1), (x2, y2), 255, -1)
        out = blend_fill(out, mask, paper_color)
    if dishes:
        mask = np.zeros(img.shape[:2], np.uint8)
        for d in dishes:
            x1, y1, x2, y2 = box(img, *d[:4], pad=0.15)
            fill_ellipse(mask, x1, y1, x2, y2)
        out = cv2.inpaint(out, mask, 4, cv2.INPAINT_TELEA)
    if cards:
        mask = np.zeros(img.shape[:2], np.uint8)
        for c in cards:
            x1, y1, x2, y2 = box(img, *c[:4], pad=0.2)
            fill_roundrect(mask, x1, y1, x2, y2)
        protect_header(mask, img)
        out = blend_fill(out, mask, paper_color)
    dest = os.path.join(DEST, out_name)
    cv2.imwrite(dest, out, [int(cv2.IMWRITE_JPEG_QUALITY), 93])
    print("wrote", dest)


def fill_roundrect(mask, x1, y1, x2, y2):
    r = max(16, int((y2 - y1) * 0.18))
    r = min(r, (x2 - x1) // 2, (y2 - y1) // 2)
    cv2.rectangle(mask, (x1 + r, y1), (x2 - r, y2), 255, -1)
    cv2.rectangle(mask, (x1, y1 + r), (x2, y2 - r), 255, -1)
    cv2.circle(mask, (x1 + r, y1 + r), r, 255, -1)
    cv2.circle(mask, (x2 - r, y1 + r), r, 255, -1)
    cv2.circle(mask, (x1 + r, y2 - r), r, 255, -1)
    cv2.circle(mask, (x2 - r, y2 - r), r, 255, -1)


def fill_ellipse(mask, x1, y1, x2, y2):
    cx = (x1 + x2) // 2
    cy = (y1 + y2) // 2
    ax = max(4, (x2 - x1) // 2)
    ay = max(4, (y2 - y1) // 2)
    cv2.ellipse(mask, (cx, cy), (ax, ay), 0, 0, 360, 255, -1)


cover_titles = [
    (6, 2.6, 88, 17.6),
    (8, 17.0, 84, 13.4),
    (6, 28.2, 88, 13.4),
]
cover_dishes = [
    (17, 41.4, 22, 13.2),
    (45, 38.4, 38, 18.2),
    (32, 44.2, 18, 13.4),
    (23, 51.2, 18, 11.0),
    (51, 50.0, 16, 10.2),
    (62, 48.6, 17, 10.6),
    (73, 51.6, 21, 12.4),
    (54, 56.8, 17, 10.4),
    (65, 59.8, 21, 12.2),
    (1.8, 57.8, 24, 15.2),
    (11, 66.4, 20, 12.8),
    (13, 77.6, 26, 13.4),
    (31, 72.8, 34, 17.2),
    (57, 72.6, 30, 16.0),
    (5, 40.6, 16, 12.0),
    (78, 46.8, 20, 14.2),
    (70, 60.4, 22, 13.0),
]

pages = [
    ("01.jpg", "01-bg.jpg", {"titles": cover_titles, "dishes": cover_dishes, "paper": (86, 1, 12, 6), "mapc": (38, 60, 8, 4)}),
    ("02.jpg", "02-bg.jpg", {"cards": [(5.0, 16.8, 90.0, 25.4), (4.5, 42.0, 91.0, 26.6), (4.5, 69.4, 91.0, 28.4)], "paper": (88, 48, 10, 18)}),
    ("03.jpg", "03-bg.jpg", {"cards": [(4.5, 16.4, 91.0, 26.0), (4.5, 42.2, 91.0, 26.6), (4.5, 69.0, 91.0, 29.2)], "paper": (88, 48, 10, 18)}),
    ("04.jpg", "04-bg.jpg", {"cards": [(4.5, 16.2, 91.0, 25.4), (4.5, 40.4, 91.0, 26.8), (4.5, 67.8, 91.0, 30.4)], "paper": (88, 48, 10, 18)}),
    ("05.jpg", "05-bg.jpg", {"cards": [(4.0, 16.2, 92.0, 21.8), (3.8, 37.4, 92.4, 28.0), (3.8, 66.0, 92.4, 32.4)], "paper": (88, 48, 10, 18)}),
    ("06.jpg", "06-bg.jpg", {"cards": [(4.5, 16.6, 91.0, 25.6), (4.5, 42.0, 91.0, 26.4), (4.5, 68.4, 91.0, 29.8)], "paper": (88, 48, 10, 18)}),
    ("07.jpg", "07-bg.jpg", {"cards": [(4.5, 16.4, 91.0, 25.8), (4.5, 41.6, 91.0, 26.6), (4.5, 68.4, 91.0, 29.8)], "paper": (88, 48, 10, 18)}),
]

for name, out, spec in pages:
    process(name, out, **spec)

project_pages = os.environ.get("KY_COPY_TO")
if project_pages:
    for _, out, __ in pages:
        shutil.copy2(os.path.join(DEST, out), os.path.join(project_pages, out))
        print("copied", out)
print("ok")
