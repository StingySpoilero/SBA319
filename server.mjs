import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1); // Exit if connection fails
  }
};

connectDB();

app.get('/', (req, res) => {
  res.send('Server is running on port ' + PORT);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});