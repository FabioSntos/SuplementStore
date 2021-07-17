import Product from "../models/Product";

class ProductPagesController {
  async store(req, res) {
    return res.status(201);
  }

  async returnProducts(req, res) {
    const products = await Product.findAll();
    return res.json(products);
  }

  async ProductById(req, res) {
    const { id } = req.params;
    const selectedProduct = await Product.findByPk(id);
    if (!selectedProduct) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }
    return res.status(200).json({ selectedProduct });
  }
}

export default new ProductPagesController();
