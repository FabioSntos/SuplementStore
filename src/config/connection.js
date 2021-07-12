import { Sequelize } from "sequelize";
import database from "./database";

import Admin from "../app/models/Admin";

const connection = new Sequelize(database);

Admin.init(connection);

export default connection;
