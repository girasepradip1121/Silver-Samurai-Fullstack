const {DataTypes}=require('sequelize')
const Sequelize=require('../config/db')

const Inquiry=Sequelize.define("inquiry",{
    inquiryId:{
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
    phone:{
        type:DataTypes.STRING,
        allowNull:false
    },
    inquiryType:{
        type:DataTypes.STRING,
        allowNull:false
    },
    message:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{tableName:"inquiry",timestamps:true})

module.exports=Inquiry;