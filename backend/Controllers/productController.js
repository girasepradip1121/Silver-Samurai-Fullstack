const Product = require("../Models/productModel");

const createProduct = async (req, res) => {
    try {
      const {
        title,
        category,
        shortDesc,
        fullDesc,
        features // string format me aayega postman se
      } = req.body;
  
      const image = req.file?.filename;
  
      if (!image) {
        return res.status(400).json({ success: false, message: "Image is required" });
      }
  
      const parsedFeatures = features ? JSON.parse(features) : [];
      const product = await Product.create({
        title,
        category,
        shortDesc,
        fullDesc,
        features: parsedFeatures,
        image
      });
  
      res.status(201).json({ success: true, product });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Failed to add product" });
    }
  };
  
  const updateProduct = async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.productId);
      if (!product) {
        return res.status(404).json({ success: false, message: "Product not found" });
      }
  
      const {
        title,
        category,
        shortDesc,
        fullDesc,
        features
      } = req.body;
  
      // Parse features string (if provided)
      const parsedFeatures = features ? JSON.parse(features) : product.features;
  
      // If new image uploaded, else keep old
      const image = req.file?.filename || product.image;
  
      await product.update({
        title: title || product.title,
        category: category || product.category,
        shortDesc: shortDesc || product.shortDesc,
        fullDesc: fullDesc || product.fullDesc,
        features: parsedFeatures,
        image,
      });
  
      res.json({ success: true, message: "Product updated", product });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Failed to update product",
        error: error.message,
      });
    }
  };
  

  const getProducts = async (req, res) => {
    try {
      const products = await Product.findAll({
        order: [['createdAt', 'DESC']],
      });
  
      const formattedProducts = products.map((product) => {
        const productJSON = product.toJSON();
        return {
          ...productJSON,
          features: typeof productJSON.features === "string"
            ? JSON.parse(productJSON.features)
            : productJSON.features,
        };
      });
  
      res.status(200).json(formattedProducts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Failed to get products" });
    }
  };
  

  const getProductById = async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.productId);
      if (!product) return res.status(404).json({ error: "Product not found" });
  
      const productJSON = product.toJSON();
      const formattedProduct = {
        ...productJSON,
        features: typeof productJSON.features === "string"
          ? JSON.parse(productJSON.features)
          : productJSON.features,
      };
  
      res.status(200).json(formattedProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Failed to get Product" });
    }
  };
  

const deleteProduct=async(req,res)=>{
    try {
        const product=await Product.findByPk(req.params.productId)
        if (!product) return res.status(404).json({ message: "Product not found" });
        await product.destroy();
        res.json({ success: true, message: "Product deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to delete", error: err.message });
    }
}

module.exports = { createProduct, getProducts, getProductById, updateProduct ,deleteProduct};
