const express = require("express");
const path = require("path");
const { manga } = require("./data/manga");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.get("/api/manga", (_req, res) => {
  res.json(manga);
});

app.get("/api/manga/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = manga.find((entry) => entry.id === id);

  if (!item) {
    return res.status(404).json({ message: "Manga topilmadi" });
  }

  return res.json(item);
});

module.exports = app;
