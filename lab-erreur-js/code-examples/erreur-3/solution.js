async function loadArticles() {
  try {
    const response = await fetch("http://localhost:8000/api/articles", {
      headers: { "Accept": "application/json" }
    });

    if (!response.ok) {
      throw new Error(`Erreur serveur HTTP : ${response.status} ${response.statusText}`);
    }

    const articles = await response.json();
    renderArticles(articles);
  } catch (error) {
    console.error("Échec du chargement des articles :", error.message);
    showErrorMessageToUser("Impossible de charger les articles actuellement.");
  }
}
