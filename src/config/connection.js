import { Sequelize } from "sequelize";
import database from "./database";

import Admin from "../app/models/Admin";
import Product from "../app/models/Product";

const connection = new Sequelize(database);

Admin.init(connection);

Product.init(connection);

export default connection;
