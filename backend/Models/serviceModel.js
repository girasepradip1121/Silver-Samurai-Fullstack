const { DataTypes } = require("sequelize");
const Sequelize = require("../config/db");

const Service = Sequelize.define(
  "service",
  {
    serviceId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortDesc: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fullDesc: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    features: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "service",
    timestamps: true,
  }
);
module.exports = Service;
