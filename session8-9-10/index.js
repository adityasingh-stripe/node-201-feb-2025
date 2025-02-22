require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/user.routes");
const discussionRoutes = require("./routes/discussion.routes");
const authRoutes = require("./routes/auth.routes");
const mongoose = require("mongoose");
const cors = require("cors");

const DB_URI = "mongodb://127.0.0.1:27017";

const app = express();
const PORT = 8082;

mongoose
  .connect(DB_URI)
  .then(() => console.log("Connected to DB at", DB_URI))
  .catch((error) => console.log("Failed to connect to DB\n", error));

app.use(express.json());

const corsOptions = {
  origin: ["http://localhost:8081", "http://localhost:8083"],
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/user", userRoutes);
app.use("/discussion", discussionRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server Listening at", PORT);
});
