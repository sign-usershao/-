(function () {
  var ORIGIN = "https://kai-yang-mei-shi.onrender.com";
  var data = window.KAIYANG_FOOD_MAP;
  var article = (data && data.article) || {};
  var TITLE =
    article.title || "开阳特色美食地图来啦！快和你的“饭搭子”去打卡吧";
  var DESC =
    article.shareDesc || "爽爽贵阳 硒养开阳，点击封面进入开阳特色美食图鉴。";
  var url = article.canonicalUrl || ORIGIN + "/";
  var image = ORIGIN + "/assets/images/share-thumb.jpg";

  document.title = TITLE;

  function setMeta(selector, value) {
    var el = document.querySelector(selector);
    if (el) el.setAttribute("content", value);
  }

  setMeta('meta[name="description"]', DESC);
  setMeta('meta[itemprop="name"]', TITLE);
  setMeta('meta[itemprop="description"]', DESC);
  setMeta('meta[itemprop="image"]', image);
  setMeta('meta[property="og:title"]', TITLE);
  setMeta('meta[property="og:description"]', DESC);
  setMeta('meta[property="og:image"]', image);
  setMeta('meta[property="og:url"]', url);

  var shareData = {
    title: TITLE,
    desc: DESC,
    link: url,
    img_url: image
  };

  function bindLegacyShare() {
    if (typeof WeixinJSBridge === "undefined") return;
    WeixinJSBridge.on("menu:share:appmessage", function () {
      WeixinJSBridge.invoke("sendAppMessage", shareData);
    });
    WeixinJSBridge.on("menu:share:timeline", function () {
      WeixinJSBridge.invoke("shareTimeline", {
        title: TITLE,
        link: url,
        img_url: image
      });
    });
  }

  if (typeof WeixinJSBridge === "undefined") {
    document.addEventListener("WeixinJSBridgeReady", bindLegacyShare, false);
  } else {
    bindLegacyShare();
  }
})();
