async function loadArticles() {
  const response = await fetch("http://localhost:8000/api/articles");
  // Hypothèse erronée : on suppose que la réponse contient toujours du JSON
  const articles = await response.json();
  renderArticles(articles);
}
