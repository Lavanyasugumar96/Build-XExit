const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8080;
const DB_URI = "mongodb://localhost:27017/8080"

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("err in connecting DB", error));

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));