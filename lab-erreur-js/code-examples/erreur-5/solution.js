async function renderBlogFeed() {
  const response = await fetch("http://localhost:8000/api/posts");
  const result = await response.json();

  // Extraction sécurisée selon la structure reçue
  const postsList = Array.isArray(result) ? result : (result.data || []);

  if (postsList.length === 0) {
    document.getElementById("feed").innerHTML = "<p>Aucun article publié pour le moment.</p>";
    return;
  }

  const html = postsList.map(post => `
    <article class="post-card">
      <h3>${post.title ?? "Titre indisponible"}</h3>
      <p>${post.excerpt ?? ""}</p>
    </article>
  `).join("");

  document.getElementById("feed").innerHTML = html;
}
