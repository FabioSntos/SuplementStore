import { Sequelize } from "sequelize";
import Model from "./baseModel";
import bcrypt from "bcryptjs";

class Admin extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          autoIncrement: true,
        },
        login: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
        underscored: true,
        tableName: "admin",
      }
    );

    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        return (user.password_hash = await bcrypt.hash(user.password, 10));
      }
    });

    return this;
  }
  // checkPassword(password) {
  //   return bcrypt.compare(password, this.password_hash);
  // }
}

export default Admin;
