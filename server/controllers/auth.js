const { findUser } = require("../repositories/user");
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
module.exports = { loginByForm, autoLogin };
