(function () {
  var data = window.KAIYANG_FOOD_MAP;
  if (!data) return;

  var article = data.article || {};
  var titleEl = document.getElementById("articleTitle");
  var accountEl = document.getElementById("accountName");
  var dateEl = document.getElementById("dateText");
  var heroEl = document.getElementById("heroImage");
  var coverLink = document.getElementById("coverLink");

  if (titleEl) titleEl.textContent = article.title || data.projectTitle;
  if (accountEl) accountEl.textContent = article.account || "诗画开阳";
  if (dateEl) dateEl.textContent = article.dateText || "贵州";
  if (heroEl && article.heroImage) heroEl.src = article.heroImage;
  if (coverLink) coverLink.setAttribute("href", "h5.html");
})();
