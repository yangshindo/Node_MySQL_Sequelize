const Sequelize = require("sequelize");
const sequelize = require("../database");

const EmployeeModel = sequelize.define("employee", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  document: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  birth_date: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  salary: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = EmployeeModel;
