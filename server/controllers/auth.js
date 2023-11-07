const { findUser, createNewUser } = require("../repositories/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function loginByForm(req, res) {
  const { login, password } = req.body;
  const user = await findUser(login);
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (isPasswordValid) {
    const token = jwt.sign({ login, password }, "secret", { expiresIn: "24h" });
    res.json({ user: { id: user.id, login: user.name, email: user.email }, token });
  } else {
    res.json({ error: "Неверно указан логин или пароль" });
  }
}

async function autoLogin(req, res) {
  const { token } = req.body;
  try {
    const { login, password } = jwt.verify(token, "secret");
    const user = await findUser(login);
    const newToken = jwt.sign({ login, password }, "secret", { expiresIn: "24h" });
    res.json({ user: { id: user.id, login: user.name, email: user.email }, token: newToken });
  } catch {
    res.json({ error: "Токен устарел" });
  }
}

async function registration(req, res) {
  const { login, password, email } = req.body;
  const isUserExisting = await findUser(login);
  if (isUserExisting) {
    res.json({ error: "Такой пользователь уже существует" });
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    createNewUser(login, hashedPassword, email);
    res.json({ msg: "Пользователь успешно зарегистрирован" });
  }
}
module.exports = { loginByForm, autoLogin, registration };
