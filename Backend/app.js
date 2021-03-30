require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Import Routes
const profileRoute = require("./routes/profiles");
app.use("/profiles", profileRoute);

// Routes
app.get("/", (req, res) => {
  res.send("Here are your profiles");
});

// Connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

// Server
const port = 3300;
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
