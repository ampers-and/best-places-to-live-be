const express = require("express");
const router = express.Router();
const { Basic } = require("../models/basic");

router.get("/", (req, res) => {
  res.json("welcome to our backend api");
});

router.get("/all", async (req, res) => {
  const result = await Basic.find().sort("name");
  res.json(result);
});

router.post("/add", (req, res) => {
  const basic = new Basic({
    name: req.body.name
  });
  basic.save();
  res.json(basic);
});

module.exports = router;