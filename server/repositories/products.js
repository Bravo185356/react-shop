const db = require('../database')

async function getProductList() {
  const productList = db.any('SELECT * FROM products')
  return productList
}

module.exports = { getProductList }