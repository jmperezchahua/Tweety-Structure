const express = require("express");
const tweetBank = require("../tweetBank");

const router = express.Router();

router.get("/", (req, res) => {
  let tweets = tweetBank.list();
  // res.send(tweets);
  res.render("index", { tweets: tweets, showForm: true });
});

router.get("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  const output = tweetBank.find({ id: id });
  // res.send(output);
  res.render("index", { tweets: output, showForm: true });
});

router.post("/", (req, res, next) => {
  const name = req.body.name;
  const content = req.body.content;
  tweetBank.add(name, content);
  res.send("tweet agregado!");
  res.redirect("/");
});

module.exports = router;
