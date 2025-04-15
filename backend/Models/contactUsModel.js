const {DataTypes}=require('sequelize')
const Sequelize=require('../config/db')

const ContactUs=Sequelize.define("contactUs",{
    contactId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    message:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{tableName:"contactUs",timestamps:true})

module.exports=ContactUs;