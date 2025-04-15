const express =require("express");
const app = express();
const sequelize =require("./config/db");
const bcrypt = require('bcrypt');

const cors = require("cors");
const Product=require('./Models/productModel')
const Service=require('./Models/serviceModel')
const Blog=require('./Models/blogModel')
const ContactUs=require('./Models/contactUsModel')
const Inquiry=require('./Models/inquiryModel')

require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));

const productRoutes=require('./Routes/productRoutes')
const serviceRoutes=require('./Routes/serviceRoutes')
const blogRoutes=require('./Routes/blogRoutes')
const contactRoutes=require('./Routes/contactUsRoutes')
const inqueryRoutes=require('./Routes/inquiryRoutes')
const adminRoutes=require('./Routes/adminRoutes');

app.use('/product',productRoutes)
app.use('/service',serviceRoutes)
app.use('/blog',blogRoutes)
app.use('/contact',contactRoutes)
app.use('/inquiry',inqueryRoutes)
app.use('/admin',adminRoutes)

app.get("/", (req, res) => {
  res.send("Hello, welcome to Silver Samurai");
});

// Wrapping bcrypt in an async function to use await
// const hashPassword = async () => {
//   try {
//     const hashedPassword = await bcrypt.hash("admin123", 10);
//     console.log(hashedPassword);
//   } catch (err) {
//     console.error("Error hashing password:", err);
//   }
// };
// hashPassword();

sequelize
  .sync({alter:true}) //alter:true use krna badme
  .then(() => {
    console.log("Database synced successfully...");
  })
  .catch((err) => {
    console.log("Error syncing database:", err);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
