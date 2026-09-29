# -*- coding: utf-8 -*-
"""Generate placeholder images and a short looping BGM for local preview."""
import math
import os
import struct
import wave

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(ROOT, "assets", "images")
SHOPS = os.path.join(IMG, "shops")
AUD = os.path.join(ROOT, "assets", "audio")
os.makedirs(SHOPS, exist_ok=True)
os.makedirs(AUD, exist_ok=True)

SHOPS_META = [
    (1, "何家会砂锅粉", "砂锅粉", "#c45c26", "#f3c07a"),
    (2, "唐记油炸粑", "油炸粑", "#d98a32", "#ffe1a8"),
    (3, "曾记水煎包", "水煎包", "#c9a227", "#fff1c9"),
    (4, "紫江花园夜市", "烙锅烤肉", "#7a2d3b", "#f2b07a"),
    (5, "谦翔夜市", "花花烤肉", "#8b1e2d", "#f4c48a"),
    (6, "炉火坛子烤鱼", "豆花烤鱼", "#1f6f8b", "#9ad7e3"),
    (7, "馋解香", "麻辣丝", "#b42318", "#f3c07a"),
    (8, "大塘鱼庄", "冷锅鱼", "#1b4f72", "#8ecae6"),
    (9, "荟泷鱼庄", "鱼火锅", "#155e63", "#99e2c3"),
    (10, "硒域食府", "酸汤牛肉", "#3d6b3d", "#d4e09b"),
    (11, "绿茵阁", "柴火鸡", "#245744", "#d9c07a"),
    (12, "蔡清鲜", "牛肉火锅", "#7a3e1d", "#efc48a"),
    (13, "李建平腊味馆", "腊味火锅", "#6b3a2a", "#e6b17a"),
    (14, "鸿月楼", "商务接待", "#2c3e50", "#e7c56a"),
    (15, "唐老五酒楼", "商务接待", "#3e2f5b", "#e7c56a"),
    (16, "春哥盛宴", "商务接待", "#4a3728", "#e7c56a"),
    (17, "于苗子食府", "小花鱼", "#1d4e4e", "#9ad7c2"),
    (18, "如意农家乐", "盗汗鸡", "#5c3d1e", "#f0c27a"),
]


def svg(w, h, body):
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">
{body}
</svg>
'''


def write(path, content):
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)


hero = svg(750, 1000, '''
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#16382b"/>
      <stop offset="55%" stop-color="#2f6a4f"/>
      <stop offset="100%" stop-color="#c45c26"/>
    </linearGradient>
  </defs>
  <rect width="750" height="1000" fill="url(#g)"/>
  <circle cx="560" cy="180" r="90" fill="#e7c56a" opacity="0.28"/>
  <path d="M0 720 C140 640 240 780 390 700 C540 620 620 760 750 690 L750 1000 L0 1000 Z" fill="#102018" opacity="0.55"/>
  <text x="375" y="430" text-anchor="middle" fill="#f7ecd7" font-size="42" font-family="Microsoft YaHei, sans-serif">爽爽贵阳 硒味开阳</text>
  <text x="375" y="500" text-anchor="middle" fill="#e7c56a" font-size="28" font-family="Microsoft YaHei, sans-serif" letter-spacing="8">开阳十大美食地图</text>
  <text x="375" y="560" text-anchor="middle" fill="#f3e0a6" font-size="16" font-family="Microsoft YaHei, sans-serif">宣传主图占位 · 请替换为客户海报</text>
''')
write(os.path.join(IMG, "article-hero.svg"), hero)

banner = svg(750, 420, '''
  <rect width="750" height="420" fill="#1d4634"/>
  <circle cx="120" cy="80" r="70" fill="#e7c56a" opacity="0.2"/>
  <circle cx="640" cy="340" r="90" fill="#c45c26" opacity="0.25"/>
  <text x="375" y="190" text-anchor="middle" fill="#f7ecd7" font-size="30" font-family="Microsoft YaHei, sans-serif">把开阳的味道收进一张地图</text>
  <text x="375" y="240" text-anchor="middle" fill="#e7c56a" font-size="16" font-family="Microsoft YaHei, sans-serif">配图占位 · 可替换为夜市 / 粉面 / 鱼火锅实拍</text>
''')
write(os.path.join(IMG, "article-banner.svg"), banner)

cover = svg(750, 1334, '''
  <defs>
    <linearGradient id="c" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f241c"/>
      <stop offset="50%" stop-color="#1f4a38"/>
      <stop offset="100%" stop-color="#9a3b1e"/>
    </linearGradient>
  </defs>
  <rect width="750" height="1334" fill="url(#c)"/>
  <ellipse cx="375" cy="220" rx="220" ry="80" fill="#e7c56a" opacity="0.16"/>
  <path d="M-20 980 C160 860 280 1040 430 920 C580 800 690 980 780 900 L780 1334 L-20 1334 Z" fill="#0b1712" opacity="0.5"/>
''')
write(os.path.join(IMG, "cover-bg.svg"), cover)

# Stylized county map placeholder
pins = ""
# pins drawn as circles for decoration in the map art itself
map_body = '''
  <rect width="750" height="1334" fill="#0f241c"/>
  <path d="M180 220 C260 180 360 190 430 230 C530 190 640 250 670 360 C700 470 660 560 690 650 C720 760 640 860 600 960 C540 1100 420 1160 300 1120 C180 1080 140 960 130 820 C118 680 90 540 130 420 C150 330 120 250 180 220 Z" fill="#2a6a4e"/>
  <path d="M180 220 C260 180 360 190 430 230 C530 190 640 250 670 360 C700 470 660 560 690 650 C720 760 640 860 600 960 C540 1100 420 1160 300 1120 C180 1080 140 960 130 820 C118 680 90 540 130 420 C150 330 120 250 180 220 Z" fill="none" stroke="#e7c56a" stroke-width="4" opacity="0.7"/>
  <circle cx="390" cy="620" r="8" fill="#e7c56a"/>
  <text x="375" y="160" text-anchor="middle" fill="#f3e0a6" font-size="22" font-family="Microsoft YaHei, sans-serif">开阳县美食地图（占位）</text>
  <text x="375" y="1260" text-anchor="middle" fill="#d9c07a" font-size="14" font-family="Microsoft YaHei, sans-serif">请替换为客户提供的地图图片</text>
  <text x="410" y="610" fill="#fff8e8" font-size="14" font-family="Microsoft YaHei, sans-serif">开阳</text>
'''
write(os.path.join(IMG, "map-placeholder.svg"), svg(750, 1334, map_body))

for n, name, dish, c1, c2 in SHOPS_META:
    body = f'''
  <defs>
    <linearGradient id="s{n}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="{c1}"/>
      <stop offset="100%" stop-color="#1a120c"/>
    </linearGradient>
  </defs>
  <rect width="750" height="1334" fill="url(#s{n})"/>
  <circle cx="560" cy="260" r="140" fill="{c2}" opacity="0.22"/>
  <circle cx="180" cy="980" r="180" fill="{c2}" opacity="0.12"/>
  <text x="375" y="560" text-anchor="middle" fill="#fff8e8" font-size="36" font-family="Microsoft YaHei, sans-serif">{name}</text>
  <text x="375" y="620" text-anchor="middle" fill="#e7c56a" font-size="22" font-family="Microsoft YaHei, sans-serif">{dish}</text>
  <text x="375" y="700" text-anchor="middle" fill="#f3e0a6" font-size="14" font-family="Microsoft YaHei, sans-serif">美食图片占位 · 编号 {n:02d}</text>
'''
    write(os.path.join(SHOPS, f"{n:02d}.svg"), svg(750, 1334, body))


def tone(freq, t, amp=0.12):
    return amp * math.sin(2 * math.pi * freq * t) * (0.5 + 0.5 * math.sin(2 * math.pi * t / 4.0))


wav_path = os.path.join(AUD, "bgm.wav")
rate = 22050
seconds = 16
nframes = rate * seconds
# G pentatonic-ish: G3 A3 C4 D4 E4
notes = [196.0, 220.0, 261.63, 293.66, 329.63]
with wave.open(wav_path, "w") as w:
    w.setnchannels(1)
    w.setsampwidth(2)
    w.setframerate(rate)
    frames = bytearray()
    for i in range(nframes):
        t = i / rate
        v = 0.0
        v += tone(notes[0], t, 0.05)
        v += tone(notes[2], t * 0.5 + 0.2, 0.06)
        v += tone(notes[4], t * 0.33 + 1.1, 0.04)
        v += 0.03 * math.sin(2 * math.pi * 0.25 * t)
        env = min(1.0, t / 0.8, (seconds - t) / 0.8)
        sample = max(-1.0, min(1.0, v * env))
        frames += struct.pack("<h", int(sample * 30000))
    w.writeframes(frames)

print("assets ready")
