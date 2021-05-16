const express = require("express");
const users = require("./users");
const tweets = require("./tweets");
const router = express.Router();

router.use("/", tweets);
router.use("/users", users);
router.use("/tweets", tweets);

// const miFunc1 = (req, res, next) => {
//   res.send("Bienvenido a la home");
// };

// const miFunc2 = (req, res, next) => {
//   res.send("Ten tu lista de tweets");
// };

// const miFunc3 = (req, res, next) => {
//   res.send("Intentando escribir un tweet..");
// };

// router.get("/", miFunc1);
// router.get("/tweets", miFunc2);
// router.post("/tweets", miFunc3);

module.exports = router;
