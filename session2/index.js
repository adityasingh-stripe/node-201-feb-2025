const express = require("express");
const currenciesJson = require("./currencies.json");
const app = express();
const PORT = 8082;

app.get("/", (req, res) => {
  res.send("<h1>Currency Database</h1>");
});

app.get("/currencies", (req, res) => {
  res.send(currenciesJson);
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
