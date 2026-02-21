const list = document.getElementById("manga-list");

async function loadManga() {
  const response = await fetch("/api/manga");
  const data = await response.json();

  list.innerHTML = data
    .map(
      (item) => `
      <article class="card">
        <h2>${item.title}</h2>
        <p><strong>Muallif:</strong> ${item.author}</p>
        <p><strong>Status:</strong> ${item.status}</p>
        <p><strong>Reyting:</strong> ${item.rating}</p>
        <div>${item.genres.map((genre) => `<span class="tag">${genre}</span>`).join("")}</div>
      </article>
    `
    )
    .join("");
}

loadManga();
