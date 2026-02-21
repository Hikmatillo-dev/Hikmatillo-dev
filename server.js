const app = require("./app");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Manga app ishga tushdi: http://localhost:${port}`);
});
