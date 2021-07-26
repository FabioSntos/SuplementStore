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
        preco: Sequelize.INTEGER,
      },
      {
        sequelize,
        underscored: true,
        tableName: "Product",
      }
    );
    return this;
  }
}

export default Product;
