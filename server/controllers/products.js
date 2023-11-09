const { getProductList } = require("../repositories/products");

async function getProducts(res) {
  const products = await getProductList();
  res.json({ products, count: products.length })
}

module.exports = { getProducts };
