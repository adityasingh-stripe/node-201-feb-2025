const express = require("express");
const {
  getCurrencies,
  getCurrencyBySymbol,
} = require("./controllers/currencies.controller");
const {
  getUsers,
  getUserById,
  searchUsers,
} = require("./controllers/users.controller");

const app = express();
const PORT = 8082;

app.get("/", (req, res) => {
  res.send("<h1>Currency Database</h1>");
});

app.get("/currencies", getCurrencies);

app.get("/currencies/:symbol", getCurrencyBySymbol);

app.get("/users", getUsers);

app.get("/users/search", searchUsers);

app.get("/users/:uuid", getUserById);

// app.post("/users", )

// app.get("/users/:uuid/profile", );

// app.get("/users/:uuid/settings", );

// app.get("/posts/:postId/comments/:commentId", (req, res) => {
//   console.log(req.params);
//   res.send(currenciesJson);
// });

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
