const { findUser } = require("../repositories/user");
const jwt = require("jsonwebtoken");

async function loginByForm(req, res) {
  const { login, password } = req.body;
  const user = await findUser(login, password);
  if (user) {
    const token = jwt.sign({ login, password }, 'secret', { expiresIn: '24h' });
    res.json({ user, token })
  } else {
    res.json({ error: 'Неверно указан логин или пароль' });
  }
}

module.exports = { loginByForm };
