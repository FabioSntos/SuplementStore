import Admin from "../models/Admin";

import * as Yup from "yup";

class AdminUserController {
  async store(req, res) {
    const schema = await Yup.object().shape({
      login: Yup.string().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        message: "Falha na validação",
      });
    }

    const userExists = await Admin.findOne({
      where: { login: req.body.login },
    });

    if (userExists) res.status(400).json({ error: "Usuário já cadastrado" });

    const { id, login, password } = req.body;

    await Admin.create(req.body);
    console.log(req.body);
    return res.json({
      id,
      login,
      password,
    });
  }
  async getAll(req, res) {
    const all = await Product.findAll();
    return res.json(all);
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

export default new AdminUserController();
