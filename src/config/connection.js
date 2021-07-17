import { Sequelize } from "sequelize";
import database from "./database";

import Admin from "../app/models/Admin";
import Department from "../app/models/Department";

const connection = new Sequelize(database);

Admin.init(connection);

Department.init(connection);

export default connection;
