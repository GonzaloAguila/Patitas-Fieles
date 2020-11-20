const Sequelize = require("sequelize");
module.exports = new Sequelize(
  "postgres://postgres:14781716asd@localhost:5432/patitas",
  {
    logging: false,
  }
);