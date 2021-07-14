import Department from "../model/Department";

import Product from "../model/Product";

class DepartmentController {
  async returnDept(req, res) {
    const departments = await Department.findAll();
    return res.json(departments);
  }

  async productByDep(req, res) {
    const { id } = req.params;
    const pksearch = await Department.findByPk(id);
    if (!pksearch) {
      return res.status(404).json({ error: "department not found" });
    } else {
      const products_dep = await Department.findAll({
        attributes: ["name_department"],
        include: [
          {
            model: Product,
            where: { id_department: id },
            attributes: ["name", "description", "prince", "estoque"],
          },
        ],
      });

      return res.json(products_dep);
    }
  }
}

export default new DepartmentController();
