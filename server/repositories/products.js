const db = require("../database");

async function getProductList() {
  const productList = await db.any("SELECT * FROM products");
  return productList;
}

async function getProduct(id) {
  const product = await db.any("SELECT * FROM products WHERE id = $1", [id]);
  return product[0];
}
module.exports = { getProductList, getProduct };
