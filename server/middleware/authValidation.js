const { body } = require("express-validator");

function registrationValidation() {
  return [
    body("login").trim().isLength({ min: 6 }).withMessage("Логин должен содержать минимум 6 символов"),
    body("password").trim().isLength({ min: 6 }).withMessage("Пароль должен содержать минимум 6 символов"),
    body("passwordConfirmation").custom(async (value, { req }) => {
      if (req.body.password !== value) {
        throw new Error("Пароли не совпадают");
      }
    }),
    body("email").notEmpty().withMessage("Не указана почта").isEmail().withMessage("Неправильный формат почты"),
  ];
}

function loginValidation() {
  return [
    body('login').trim().notEmpty().withMessage('Заполните поле'),
    body('password').trim().notEmpty().withMessage('Заполните поле')
  ]
}

module.exports = { registrationValidation, loginValidation };
