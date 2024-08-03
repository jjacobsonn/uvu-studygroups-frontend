const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authController = {};

authController.register = async (req, res) => {
  try {
    const { firstName, lastName, studentId, email, password } = req.body;
    const existingUser = await User.findByEmail(email);

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = {
      firstName,
      lastName,
      studentId,
      email,
      password
    };

    await User.create(newUser);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

authController.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByEmail(email);

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = authController;