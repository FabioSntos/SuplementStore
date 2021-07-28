import { Sequelize } from "sequelize";
import Model from "./baseModel";

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: Sequelize.STRING,
        descricao: Sequelize.STRING,
        benefits1: Sequelize.INTEGER,
        benefits2: Sequelize.INTEGER,
        benefits3: Sequelize.INTEGER,
        id_dep: Sequelize.INTEGER,
      },
      {
        sequelize,
        underscored: true,
        tableName: "Product",
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Department, { foreignKey: "id_dep" });
  }
}

export default Product;
