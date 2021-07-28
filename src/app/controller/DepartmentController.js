import Department from "../model/Department";

class DepartmentController {
  async returnDept(req, res) {
    const departments = await Department.findAll();
    return res.json(departments);
  }
}

export default new DepartmentController();
