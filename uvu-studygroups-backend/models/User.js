const db = require('../config/db');
const bcrypt = require('bcryptjs');

const User = {};

User.create = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const query = 'INSERT INTO users (firstName, lastName, studentId, email, password) VALUES (?, ?, ?, ?, ?)';
  return new Promise((resolve, reject) => {
    db.query(query, [userData.firstName, userData.lastName, userData.studentId, userData.email, hashedPassword], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

User.findByEmail = (email) => {
  const query = 'SELECT * FROM users WHERE email = ?';
  return new Promise((resolve, reject) => {
    db.query(query, [email], (err, result) => {
      if (err) reject(err);
      resolve(result[0]);
    });
  });
};

module.exports = User;