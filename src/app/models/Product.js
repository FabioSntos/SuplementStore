import { Sequelize } from "sequelize";

import Model from "./baseModel";

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          autoIncrement: true,
        },
        nameProduct: Sequelize.STRING,
        description: Sequelize.STRING(1234),
        nameImg: Sequelize.STRING,
        path: Sequelize.STRING,
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

export default Product;
