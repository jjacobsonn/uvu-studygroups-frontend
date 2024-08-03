// index.js (backend)
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS middleware
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors()); // Use CORS middleware
app.use(bodyParser.json());

// Use Auth Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});