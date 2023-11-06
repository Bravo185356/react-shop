const express = require("express");
const router = express.Router();
const { loginByForm } = require('../controllers/auth')

router.post("/registration", (req, res) => {
  res.send("Регистрация");
});

router.post("/login", (req, res) => {
  res.send("Логин при заходе на сайт");
});

router.post("/login-form", loginByForm);

module.exports = router;
