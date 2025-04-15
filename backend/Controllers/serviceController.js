const Service = require("../Models/serviceModel");

const createService = async (req, res) => {
  try {
    const {
      title,
      shortDesc,
      fullDesc,
      features, // string format me aayega postman se
    } = req.body;

    const image = req.file?.filename;

    if (!image) {
      return res
        .status(400)
        .json({ success: false, message: "Image is required" });
    }

    const parsedFeatures = features ? JSON.parse(features) : [];
    const service = await Service.create({
      title,
      shortDesc,
      fullDesc,
      features: parsedFeatures,
      image,
    });

    res.status(201).json({ success: true, service });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to add service" });
  }
};

const updateService = async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.productId);
    if (!service) {
      return res
        .status(404)
        .json({ success: false, message: "service not found" });
    }

    const { title, shortDesc, fullDesc, features } = req.body;

    // Parse features string (if provided)
    const parsedFeatures = features ? JSON.parse(features) : service.features;

    // If new image uploaded, else keep old
    const image = req.file?.filename || service.image;

    await service.update({
      title: title || service.title,
      shortDesc: shortDesc || service.shortDesc,
      fullDesc: fullDesc || service.fullDesc,
      features: parsedFeatures,
      image,
    });

    res.json({ success: true, message: "service updated", service });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to update service",
      error: error.message,
    });
  }
};

const getServices = async (req, res) => {
  try {
    const services = await Service.findAll({
      order: [["createdAt", "DESC"]],
    });

    const formattedServices = services.map((service) => {
      const serviceJSON = service.toJSON();
      return {
        ...serviceJSON,
        features:
          typeof serviceJSON.features === "string"
            ? JSON.parse(serviceJSON.features)
            : serviceJSON.features,
      };
    });
    res.status(200).json(formattedServices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to get Service" });
  }
};

const getServiceById = async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.productId);
    if (!service) return res.status(404).json({ error: "Service not found" });

    const serviceJSON = service.toJSON();
    const formattedServices = {
      ...serviceJSON,
      features:
        typeof serviceJSON.features === "string"
          ? JSON.parse(serviceJSON.features)
          : serviceJSON.features,
    };

    res.status(200).json(formattedServices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to get Service" });
  }
};

const deleteService = async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.productId);
    if (!service) return res.status(404).json({ message: "Service not found" });
    await service.destroy();
    res.json({ success: true, message: "Service deleted" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to delete",
        error: err.message,
      });
  }
};

module.exports = {
  createService,
  updateService,
  getServices,
  getServiceById,
  deleteService,
};
