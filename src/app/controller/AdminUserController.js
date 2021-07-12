import AdminUser from "../model/AdminUser";
import * as Yup from "yup";

class AdminUserController {
  async store(req, res) {
    const schema = await Yup.object().shape({
      login: Yup.string().required(),
      password: Yup.string().required(),
    });
    const { login, password } = req.body;
    /*
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        message: "Não foi possível cadastrar admnistrador",
      });
    }

    const adminExist = await AdminUser.findOne({
      login,
    });

    if (adminExist) {
      return res.status(400).json({ error: "nome de login já cadastrado" });
    }
    */
    const admin = await AdminUser.create({
      login,
      password,
    });
    return res.json({
      admin,
    });
  }
}

export default new AdminUserController();
