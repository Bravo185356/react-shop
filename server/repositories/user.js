const db = require("../database");

async function findUser(login) {
  const user = await db.any(`SELECT * FROM users WHERE name = $1`, [login]);
  return user[0];
}

module.exports = { findUser };