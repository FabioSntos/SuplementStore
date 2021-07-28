import { Sequelize } from "sequelize";
import database from "./database";

import Admin from "../app/models/Admin";
import Product from "../app/models/Product";
import Department from "../app/models/Departments";

const connection = new Sequelize(database);

Admin.init(connection);
Product.init(connection);

Department.init(connection);

Department.associate(connection.models);
Product.associate(connection.models);

export default connection;
