const { Sequelize } = require("sequelize");
const database = require("./database");

const Admin = require("../app/models/Admin");
const Product = require("../app/models/Product");
const Department = require("../app/models/Department");

const connection = new Sequelize(database);

Admin.init(connection);
Product.init(connection);

Department.init(connection);

Department.associate(connection.models);
Product.associate(connection.models);

export default connection;
