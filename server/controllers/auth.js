const { findUser } = require("../repositories/user");
const jwt = require("jsonwebtoken");

async function loginByForm(req, res) {
  const { login, password } = req.body;
  const user = await findUser(login, password);
  if (user) {
    const token = jwt.sign({ login, password }, "secret", { expiresIn: "24h" });
    res.json({ user, token });
  } else {
    res.json({ error: "Неверно указан логин или пароль" });
  }
}

async function autoLogin(req, res) {
  const { token } = req.body;
  try {
    const parsedToken = jwt.verify(token, "secret");
    const { login, password } = parsedToken;
    const user = await findUser(login, password);
    const newToken = jwt.sign({ login, password }, "secret", { expiresIn: "24h" });
    res.json({ user, token: newToken });
  } catch {
    res.json({ error: "Токен устарел" });
  }
}
module.exports = { loginByForm, autoLogin };
