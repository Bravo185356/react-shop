const { getProductList, getProduct } = require("../repositories/products");

async function getProducts(res) {
  const products = await getProductList();
  res.json({ products, count: products.length });
}

async function getProductById(req, res) {
  const { id } = req.params;
  const product = await getProduct(id);
  res.json(product);
}
module.exports = { getProducts, getProductById };
