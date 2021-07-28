import Product from "../models/Product";
import * as Yup from "yup";

class ProductPagesController {
  async store(req, res) {
    const schema = await Yup.object().shape({
      name: Yup.string().required(),
      descricao: Yup.string().required(),
      benefits1: Yup.string().required(),
      benefits2: Yup.string().required(),
      benefits3: Yup.string().required(),
      id_dep: Yup.number().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        message:
          "Falha ao cadastrar produto; Por favor corrija os dados para alteração",
      });
    }
    const productExist = await Product.findOne({
      where: { name: req.body.name },
    });

    if (productExist) {
      return res.status(400).json({ error: "Produto já existe no sistema" });
    }

    const { id, name, descricao, benefits1, benefits2, benefits3, id_dep } =
      await Product.create(req.body);
    return res.json({
      id,
      name,
      descricao,
      benefits1,
      benefits2,
      benefits3,
      id_dep,
    });
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
