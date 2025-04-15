const Inquiry = require("../Models/inquiryModel");

const createInquiry = async (req, res) => {
  try {
    console.log("Request Body:", req.body); // ✅ Debugging ke liye

    const { name, email,phone,inquiryType, message} = req.body;

    if (!name || !email || !phone || !inquiryType || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newInquiry = await Inquiry.create({ name, email,phone,inquiryType, message});

    return res.status(201).json(newInquiry);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Failed to create Inquiry" });
  }
};

const getInquiry = async (req, res) => {
  try {
    const allInquiries = await Inquiry.findAll();
    res.status(200).json(allInquiries);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Failed to get Inquiries" });
  }
};

const deleteInquiry=async(req,res)=>{
    try {
        const {inquiryId}=req.params;
        const inquiry=await Inquiry.findOne({where:{inquiryId}})
        if(!inquiry) return res.status(400).json({message:"Request not found"})

        await inquiry.destroy()
        res.status(200).json("request deleted successully")
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Failed to delete request" });
    }
}

module.exports = { createInquiry,getInquiry,deleteInquiry };
