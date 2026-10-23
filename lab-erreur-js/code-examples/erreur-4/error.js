async function publishArticle(data) {
  const response = await fetch("http://localhost:8000/api/articles", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return await response.json();
}
