const db = require("../database");

async function findUser(login) {
  const user = await db.any(`SELECT * FROM users WHERE name = $1`, [login]);
  return user[0];
}

async function createNewUser(login, password, email) {
  await db.any(`INSERT INTO users (name, password, email) values ($1, $2, $3)`, [login, password, email]);
}

module.exports = { findUser, createNewUser };