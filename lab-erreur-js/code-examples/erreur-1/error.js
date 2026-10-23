async function displayArticleDetails(articleId) {
  const response = await fetch(`http://localhost:8000/api/articles/${articleId}`);
  const article = await response.json();

  // Erreur : l'article récupéré n'a pas encore d'auteur ou la propriété est absente
  document.getElementById("article-title").textContent = article.title;
  document.getElementById("author-name").textContent = article.author.name;
}
