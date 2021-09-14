const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config();

const PORT = 3030;
const app = express();

const todoRoutes = require("./routes/todoRoutes")
const connectionOption = { useUnifiedTopology : true, useNewUrlParser: true };

const dbLink = process.env.DB_LINK

app.use(express.json());
app.use(cors());

mongoose.connect(`${dbLink}`, connectionOption)
  .then (() => console.log("Connected successfully"))
  .catch((err) => console.error(err))


app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log("The server is listening on port " + PORT)
});