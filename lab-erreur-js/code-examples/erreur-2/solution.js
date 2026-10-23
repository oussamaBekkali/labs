// Préférer un écouteur d'événement depuis le module JavaScript.
document.querySelectorAll(".btn-category").forEach((button) => {
  button.addEventListener("click", (event) => {
    const category = event.target.dataset.category;
    fetchPosts(category);
  });
});

// Alternative si l'appel direct depuis le HTML est indispensable :
window.fetchPosts = fetchPosts;
