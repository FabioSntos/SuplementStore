const Department = require("../models/Department");

const Yup = require("yup");

class DepartmentController {
  async store(req, res) {
    const schema = await Yup.object().shape({
      nameDepartment: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        message:
          "Falha ao cadastrar produto; Por favor corrija os dados para alteração",
      });
    }

    const departmentExist = await Department.findOne({
      where: { nameDepartment: req.body.nameDepartment },
    });

    if (departmentExist) {
      return res.status(400).json({ error: "Produto já existe no sistema" });
    }

    const { nameDepartment } = await Department.create(req.body);

    return res.json({
      nameDepartment,
    });
  }

  async returnDept(req, res) {
    const departments = await Department.findAll();
    return res.json(departments);
  }
}

export default new DepartmentController();
