const express = require("express");
const router = express.Router();

router.post("/registration", (req, res) => {
  res.send("Регистрация");
});

router.post("/login", (req, res) => {
  res.send("Логин при заходе на сайт");
});

router.post("/login-form", (req, res) => {
  res.send('Логин')
});

module.exports = router;
