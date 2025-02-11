const express = require("express");
require("dotenv").config();
const currencyRouter = require("./routes/currencies.route");
const userRouter = require("./routes/users.route");

const app = express();
const PORT = 8082;

app.get("/", (req, res) => {
  res.send("<h1>Currency Database</h1>");
});

app.use("/currencies", currencyRouter);

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
