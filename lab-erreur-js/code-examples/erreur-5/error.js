async function renderBlogFeed() {
  const response = await fetch("http://localhost:8000/api/posts");
  const posts = await response.json();

  // Erreur : on suppose que 'posts' est directement un tableau (Array)
  const html = posts.map(post => `
    <article class="post-card">
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
    </article>
  `).join("");

  document.getElementById("feed").innerHTML = html;
}
