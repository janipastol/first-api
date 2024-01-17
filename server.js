const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
// const bcrypt = require("bcrypt");c
const connectDB = require("./db");

// Load env vars
dotenv.config({ path: "./config.env" });

// Connect to database
connectDB();

// Auth Route Files
const auth = require("./routes/auth");

// User Route Files
const users = require("./routes/users");

const app = express();

// Body parser
app.use(express.json());

// Mount Auth routers
app.use("/", auth);

// Mount User routers
app.use("/users", users);

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
