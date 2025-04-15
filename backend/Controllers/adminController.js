const Admin = require('../Models/adminModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const adminController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const admin = await Admin.findOne({where:{email}});

      if (!admin) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const token = jwt.sign(
        { id: admin.id, role: 'admin' },
        process.env.JWT_SECRET,
      );

      res.json({ token, admin });
    } catch (error) {
        console.log(error);
        
      res.status(500).json({ error: 'Server error' });
    }
  },

  getDashboard: (req, res) => {
    res.json({ message: 'Welcome to Admin Dashboard!' });
  }
};

module.exports = adminController;