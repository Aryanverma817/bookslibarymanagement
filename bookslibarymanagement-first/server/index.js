require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const cloudinary = require('./config/cloudinary');
const router = require('./routes/bookRoute');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());


// Connect to MongoDB
connectDB();

// Routes
app.use('/api/books', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
