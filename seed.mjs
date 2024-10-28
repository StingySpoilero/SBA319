import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Book from './models/Book.mjs'; // Adjust the path as necessary

dotenv.config();

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publishedYear: 1925 },
  { title: "1984", author: "George Orwell", publishedYear: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", publishedYear: 1960 },
  { title: "Pride and Prejudice", author: "Jane Austen", publishedYear: 1813 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", publishedYear: 1951 }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');

    await Book.deleteMany(); // Clear existing books
    await Book.insertMany(books); // Insert new books
    console.log('Database seeded with books');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close(); // Close the connection
  }
};

seedDB();