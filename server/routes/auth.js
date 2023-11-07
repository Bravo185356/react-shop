const express = require("express");
const router = express.Router();
const { loginByForm, autoLogin } = require('../controllers/auth')

router.post("/registration", (req, res) => {
  res.send("Регистрация");
});

router.post("/login", autoLogin);

router.post("/login-form", loginByForm);

module.exports = router;
