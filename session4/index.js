const express = require("express");
require("dotenv").config();
const currencyRouter = require("./routes/currencies.route");
const userRouter = require("./routes/users.route");
const authorize = require("./middlewares/verifyAuth");

const app = express();
const PORT = 8082;

// app.use(authorize); // applies auth middleware to all endpoints

app.get("/", (req, res) => {
  res.send("<h1>Currency Database</h1>");
});

app.use("/currencies", currencyRouter);

// app.use(authorize); // applies auth to /users but not /currencies

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
