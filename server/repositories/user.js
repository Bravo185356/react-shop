const db = require("../database");

async function findUser(login, password) {
  const user = await db.any(`SELECT id, name, email FROM users WHERE name = $1 AND password = $2`, [login, password]);
  return user[0];
}

module.exports = { findUser };