const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const path = require("path");

//require models
require("./api/todoSchema");

const app = express();

const api = require("./api/route");

mongoose
  .connect("connection url")
  .then(() => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(express.static(path.join(__dirname, "dist/TODO-NGRX")));

    app.use("/api", api);

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist/TODO-NGRX/index.html"));
    });

    app.set("PORT", 8080);
    app.listen(app.get("PORT"), () => {
      console.log(`Server is running on port ${app.get("PORT")}`);
    });
  })
  .catch(err => console.log("Connection Failed"));
