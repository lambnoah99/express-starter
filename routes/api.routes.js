const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/:name", (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

router.get("*", (req, res) => {
  res.sendStatus(404);
});

module.exports = router;
