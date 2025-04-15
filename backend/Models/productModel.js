const { DataTypes } = require("sequelize");
const Sequelize = require("../config/db");

const Product = Sequelize.define(
  "product",
  {
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
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
    tableName: "product",
    timestamps: true,
  }
);
module.exports = Product;
