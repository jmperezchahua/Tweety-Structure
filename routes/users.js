const express = require("express");
const tweetBank = require("../tweetBank");

const router = express.Router();

router.get("/:name", (req, res, next) => {
  const name = req.params.name;
  const output = tweetBank.find({ name: name });
  // res.send(output);
  res.render("index", { tweets: output, showForm: true, userName: name });
});

module.exports = router;
