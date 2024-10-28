import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/db.mjs';
import userRoutes from './routes/userRoutes.mjs';
import bookRoutes from './routes/bookRoutes.mjs';
import reviewRoutes from './routes/reviewRoutes.mjs';
import dotenv from 'dotenv';

dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/reviews', reviewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});