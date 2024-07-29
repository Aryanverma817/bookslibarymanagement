const Book = require('../models/bookMan');
const cloudinary = require('../config/cloudinary');
const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const createBook = async (req, res) => {
  try {
    const { name, description } = req.body;
    const result = await cloudinary.uploader.upload(req.file.path);
    const book = new Book({
      name,
      description,
      image: result.secure_url,
    });
    await book.save();
    fs.unlinkSync(req.file.path); // Remove the file from the local folder after uploading to Cloudinary
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const editBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const book = await Book.findById(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    book.name = name || book.name;
    book.description = description || book.description;
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      book.image = result.secure_url;
      fs.unlinkSync(req.file.path); // Remove the file from the local folder after uploading to Cloudinary
    }
    await book.save();
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const showAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBook,
  editBook,
  showAllBooks,
  deleteBook,
};
