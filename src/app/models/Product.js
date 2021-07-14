import { Sequelize } from "sequelize";
import Model from "./baseModel";

class Admin extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          autoIncrement: true,
        },
        name: Sequelize.STRING,
        price: Sequelize.FLOAT,
        description: Sequelize.STRING(1234),
        id_department: Sequelize.INTEGER,
      },
      {
        sequelize,
        underscored: true,
        tableName: "product",
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.department, { foreignKey: "id_department" });
  }
}

export default Admin;
