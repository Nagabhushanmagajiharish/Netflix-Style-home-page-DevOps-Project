const trending = [
  { title: "Apex Drift", year: 2024, tag: "Sci-Fi" },
  { title: "City of Glass", year: 2023, tag: "Thriller" },
  { title: "Deep Bloom", year: 2022, tag: "Drama" },
  { title: "Neon Harbor", year: 2021, tag: "Action" }
];

const topPicks = [
  { title: "Skyline Echo", year: 2024, tag: "Adventure" },
  { title: "Black Signal", year: 2020, tag: "Mystery" },
  { title: "Last Lantern", year: 2019, tag: "Fantasy" },
  { title: "Cold Circuit", year: 2022, tag: "Tech" }
];

function renderCards(targetId, items) {
  const row = document.getElementById(targetId);
  row.innerHTML = items
    .map(
      (item) => `
      <div class="card">
        <div>
          <div class="card-title">${item.title}</div>
          <div class="card-meta">${item.tag} ? ${item.year}</div>
        </div>
        <div class="card-meta">Local demo data</div>
      </div>`
    )
    .join("");
}

renderCards("row-trending", trending);
renderCards("row-top", topPicks);