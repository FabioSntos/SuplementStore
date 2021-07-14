import { Sequelize } from "sequelize";
import database from "./database";

import Admin from "../app/models/Admin";
import Department from "../app/models/Department";
import Product from "../app/models/Product";

const connection = new Sequelize(database);

Admin.init(connection);

Department.init(connection);

Department.associate(connection.models);
Product.associate(connection.models);

export default connection;
