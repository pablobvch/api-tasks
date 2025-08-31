const bodyParser = require("body-parser"); // new
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

require("dotenv").config();
const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/tasksdb";

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const app = express();
    app.use(bodyParser.json());
    app.use("/api", routes);

    app.listen(5001, () => {
      console.log("Server has started!");
    });
  });
