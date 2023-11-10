const express = require("express");
const router = express.Router();
const { loginByForm, autoLogin, registration } = require("../controllers/auth");
const { registrationValidation } = require("../middleware/authValidation");

router.post("/registration", registrationValidation(), registration);

router.post("/login", autoLogin);

router.post("/login-form", loginByForm);

module.exports = router;
