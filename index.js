const bodyParser = require("body-parser"); // new
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

mongoose
  .connect("mongodb://localhost:27017/bertoni", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    const app = express();
    app.use(bodyParser.json());
    app.use("/api", routes);

    app.listen(5000, () => {
      console.log("Server has started!");
    });
  });
