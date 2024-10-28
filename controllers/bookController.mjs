import Book from '../models/Book.mjs';

export const getAllBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

export const createBook = async (req, res) => {
  const newBook = new Book(req.body);
  await newBook.save();
  res.status(201).json(newBook);
};