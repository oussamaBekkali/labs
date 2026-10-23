async function displayArticleDetails(articleId) {
  const response = await fetch(`http://localhost:8000/api/articles/${articleId}`);
  const article = await response.json();

  if (!article || typeof article !== "object") {
    console.warn("Données d'article invalides reçues de l'API");
    return;
  }

  document.getElementById("article-title").textContent = article?.title ?? "Sans titre";
  document.getElementById("author-name").textContent = article?.author?.name ?? "Auteur anonyme";
}
