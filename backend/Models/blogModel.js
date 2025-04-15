const { DataTypes } = require("sequelize");
const Sequelize = require("../config/db");

const Blog = Sequelize.define(
  "blog",
  {
    blogId: {
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
    author: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    readTime: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    publishDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT, // Full article content
    },
  },
  {
    tableName: "blog",
    // timestamps: true,
  }
);
module.exports = Blog;
