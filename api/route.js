const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const TODO = mongoose.model("TODO");

router.get("/todo", (req, res, next) => {
  let todos = TODO.find({});
  todos.then(result => {
    return res.json({ message: "SSSS", result });
  });
});

router.post("/todo", (req, res, next) => {
  let task = new TODO(req.body)
    .save()
    .then(result => {
      return res.json({ message: "SAVED", result });
    })
    .catch(err => res.json({ message: "Something went wrong" }));
});

router.put("/todo", (req, res, next) => {
  const { type, value, _id } = req.body;
  let task;
  if (type === "task") {
    task = TODO.findOneAndUpdate({ _id }, { task: value }, { new: true });
  } else {
    task = TODO.findOneAndUpdate({ _id }, { complete: !value }, { new: true });
  }
  task
    .then(result => {
      return res.json({ message: "Update Done", result });
    })
    .catch(err => {
      return res.json({ message: "Error", result: err });
    });
});

router.delete("/todo/all", (req, res, next) => {
  TODO.remove()
    .then(result => res.json({ message: "Removed All", result: [] }))
    .catch(err => res.json({ message: "Error", result: err }));
});

module.exports = router;
