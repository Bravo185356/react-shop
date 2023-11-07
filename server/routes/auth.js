const express = require("express");
const router = express.Router();
const { loginByForm, autoLogin, registration } = require('../controllers/auth')

router.post("/registration", registration);

router.post("/login", autoLogin);

router.post("/login-form", loginByForm);

module.exports = router;
