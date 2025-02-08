import express from "express";
import {
  getCurrencies,
  getCurrencyBySymbol,
} from "./controllers/currencies.controller.js";

const app = express();
const PORT = 8082;

app.get("/", (req, res) => {
  res.send("<h1>Currency Database</h1>");
});

app.get("/currencies", getCurrencies);

app.get("/currencies/:symbol", getCurrencyBySymbol);

// app.get("/posts/:postId/comments/:commentId", (req, res) => {
//   console.log(req.params);
//   res.send(currenciesJson);
// });

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
