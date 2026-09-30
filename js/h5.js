(function () {
  var data = window.KAIYANG_FOOD_MAP;
  if (!data) return;

  var slides = document.getElementById("slides");
  var musicBtn = document.getElementById("musicBtn");
  var audio = document.getElementById("bgm");
  var hint = document.getElementById("swipeHint");
  var shops = data.shops || [];

  audio.src = data.bgm;

  function setVh() {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
  }
  setVh();
  window.addEventListener("resize", setVh);

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function shopById(id) {
    for (var i = 0; i < shops.length; i++) {
      if (shops[i].id === id) return shops[i];
    }
    return null;
  }

  function hotspotHtml(spot) {
    var shop = shopById(spot.shopId);
    if (!shop) return "";
    return (
      '<a class="hotspot" id="shop-' +
      shop.id +
      '" href="' +
      escapeHtml(shop.amapUrl) +
      '" target="_blank" rel="noopener noreferrer" aria-label="' +
      escapeHtml(shop.name) +
      ' 导航至" style="left:' +
      spot.left +
      "%;top:" +
      spot.top +
      "%;width:" +
      spot.width +
      "%;height:" +
      spot.height +
      '%;"></a>'
    );
  }

  function pieceHtml(src, piece, cls) {
    var delay = piece.delay || 0;
    var w = piece.width || 1;
    var h = piece.height || 1;
    return (
      '<div class="piece ' +
      cls +
      '" style="left:' +
      piece.left +
      "%;top:" +
      piece.top +
      "%;width:" +
      piece.width +
      "%;height:" +
      piece.height +
      "%;animation-delay:" +
      delay +
      's">' +
      '<img class="piece__img" src="' +
      escapeHtml(src) +
      '" alt="" style="width:' +
      10000 / w +
      "%;height:" +
      10000 / h +
      "%;left:" +
      (-100 * piece.left) / w +
      "%;top:" +
      (-100 * piece.top) / h +
      '%;">' +
      "</div>"
    );
  }

  function layersHtml(page) {
    var src = page.image;
    var html = "";
    (page.titlePieces || []).forEach(function (p) {
      html += pieceHtml(src, p, "piece--enter piece--title");
    });
    (page.dishPieces || []).forEach(function (p) {
      html += pieceHtml(src, p, "piece--enter piece--dish");
    });
    (page.cardPieces || []).forEach(function (p) {
      html += pieceHtml(src, p, "piece--enter piece--card");
    });
    return html;
  }

  function posterSlide(page, index) {
    var spots = (page.hotspots || []).map(hotspotHtml).join("");
    var active = index === 0 ? " is-active" : "";
    var bg = page.bgImage || page.image;
    return (
      '<section class="slide poster' +
      active +
      '" data-slide="poster" data-poster="' +
      (index + 1) +
      '">' +
      '<div class="poster__frame">' +
      '<img class="poster__img" src="' +
      escapeHtml(bg) +
      '" alt="开阳美食图鉴 ' +
      (index + 1) +
      '" />' +
      '<div class="poster__layers">' +
      layersHtml(page) +
      "</div>" +
      spots +
      "</div></section>"
    );
  }

  var posters = data.posterPages || [];
  slides.innerHTML = posters.map(posterSlide).join("");

  function fitPosterFrames() {
    var w = slides.clientWidth;
    var h = slides.clientHeight;
    var frames = document.querySelectorAll(".poster__frame");
    for (var i = 0; i < frames.length; i++) {
      var frame = frames[i];
      var img = frame.querySelector(".poster__img");
      if (!img || !img.naturalWidth) continue;
      var scale = Math.min(w / img.naturalWidth, h / img.naturalHeight);
      frame.style.width = Math.round(img.naturalWidth * scale) + "px";
      frame.style.height = Math.round(img.naturalHeight * scale) + "px";
    }
  }

  function bindPosterFit() {
    var imgs = document.querySelectorAll(".poster__img");
    var pending = imgs.length;
    function one() {
      pending -= 1;
      if (pending <= 0) fitPosterFrames();
    }
    if (!pending) return;
    for (var i = 0; i < imgs.length; i++) {
      if (imgs[i].complete && imgs[i].naturalWidth) one();
      else {
        imgs[i].addEventListener("load", one);
        imgs[i].addEventListener("error", one);
      }
    }
  }

  bindPosterFit();
  window.addEventListener("resize", fitPosterFrames);
  requestAnimationFrame(function () {
    var first = document.querySelector(".slide.poster");
    if (!first) return;
    first.classList.remove("is-active");
    void first.offsetWidth;
    first.classList.add("is-active");
  });
  if (/[?&]debug=1/.test(location.search)) {
    document.documentElement.classList.add("debug-hotspots");
  }

  var slideEls = Array.prototype.slice.call(document.querySelectorAll(".slide"));

  function setActive() {
    var top = slides.scrollTop;
    var h = slides.clientHeight;
    var idx = Math.round(top / h);
    slideEls.forEach(function (el, i) {
      var on = i === idx;
      if (on) {
        if (!el.classList.contains("is-active")) {
          el.classList.add("is-active");
        }
      } else {
        el.classList.remove("is-active");
      }
    });
    if (hint) {
      hint.classList.toggle("is-hidden", idx >= slideEls.length - 1);
    }
  }

  var ticking = false;
  slides.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      setActive();
      ticking = false;
    });
  });

  slideEls[0] && slideEls[0].classList.add("is-active");

  var playing = false;

  function setMusicUi() {
    musicBtn.classList.toggle("is-on", playing);
    musicBtn.classList.toggle("is-off", !playing);
  }

  function playMusic() {
    var p = audio.play();
    if (p && p.then) {
      p.then(function () {
        playing = true;
        setMusicUi();
      }).catch(function () {
        playing = false;
        setMusicUi();
      });
    }
  }

  function pauseMusic() {
    audio.pause();
    playing = false;
    setMusicUi();
  }

  musicBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    if (playing) pauseMusic();
    else playMusic();
  });

  function unlockMusic() {
    playMusic();
    document.removeEventListener("touchstart", unlockMusic);
    document.removeEventListener("click", unlockMusic);
  }

  document.addEventListener("touchstart", unlockMusic, { once: true });
  document.addEventListener("click", unlockMusic, { once: true });

  document.addEventListener("WeixinJSBridgeReady", playMusic, false);
  if (typeof WeixinJSBridge !== "undefined") playMusic();

  setMusicUi();
})();
