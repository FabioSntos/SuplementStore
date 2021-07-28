"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Product", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      benefits1: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      benefits2: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      benefits3: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      id_dep: {
        type: Sequelize.INTEGER,
        references: { model: "departments", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable("Product");
  },
};
