const asyncHandler = require('express-async-handler')

const Book = require('../models/bookModel.js')

// @desc    Get All Books
// @route   GET /api/books
// @access  Public
const getAllBooks = asyncHandler(async (req, res) => {
  const books = await Book.find()

  res.status(200).json(books)
})

// @desc    Add a book
// @route   POST /api/books
// @access  Private
const addBook = asyncHandler(async (req, res) => {
  if (
    !req.body.title ||
    !req.body.author ||
    !req.body.price ||
    !req.body.isbn
  ) {
    res.status(400)

    throw new Error('Please add all fields')
  }

  const book = await Book.create(req.body)

  res.status(201).json(book)
})

// @desc    Get a book
// @route   GET /api/books/:id
// @access  Public
const getBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id)

  if (!book) {
    res.status(404)

    throw new Error('Book not found')
  }

  res.status(200).json(book)
})

// @desc    Update a book
// @route   POST /api/goals/:id
// @access  Private
const updateBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id)

  if (!book) {
    res.status(404)

    throw new Error('Book not found')
  }

  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedBook)
})

// @desc    Delete a book
// @route   POST /api/goals/:id
// @access  Private
const deleteBook = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` })
})

module.exports = {
  getAllBooks,
  addBook,
  getBook,
  updateBook,
  deleteBook,
}
