const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

exports.register = (req, res) => {
  const { firstName, lastName, studentId, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const query = 'INSERT INTO users (first_name, last_name, student_id, email, password) VALUES (?, ?, ?, ?, ?)';

  db.query(query, [firstName, lastName, studentId, email, hashedPassword], (err, result) => {
    if (err) return res.status(500).json({ message: 'Error registering user' });

    res.status(201).json({ message: 'User registered successfully' });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM users WHERE email = ?';

  db.query(query, [email], (err, results) => {
    if (err) return res.status(500).json({ message: 'Error logging in' });
    if (results.length === 0) return res.status(400).json({ message: 'Invalid email or password' });

    const user = results[0];
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ message: 'Invalid email or password' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  });
};