const { Sequelize } = require("sequelize");
require("dotenv/config");

const sequelize = new Sequelize(
  (database = "mysql_db"),
  (username = "admin"),
  (password = process.env.DB_PASSWORD),
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectOptions: {
      connectTimeout: 60000,
    },
  }
);

module.exports = sequelize;
