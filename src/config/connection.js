import { Sequelize } from "sequelize";
import database from "./database";

import AdminUser from "../app/model/AdminUser";

const connection = new Sequelize(database);

AdminUser.init(connection);

export default connection;
