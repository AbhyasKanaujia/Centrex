const asyncHandler = require('express-async-handler')

const Book = require('../models/bookModel.js')

// @desc    Get All Books
// @route   GET /api/books
// @access  Public
const getAllBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({ visible: true }).select('-visible')

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

  const book = await Book.create({ ...req.body, seller: req.user._id })

  res.status(201).json(book)
})

// @desc    Get a book
// @route   GET /api/books/:id
// @access  Public
const getBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id)

  if (!book.visible && !book.seller.compare(req.user._id)) {
    res.status(401)

    throw new Error('Book is not available anymore')
  }

  if (!book) {
    res.status(404)

    throw new Error('Book not found')
  }

  res.status(200).json(book)
})

// @desc    Update user book
// @route   POST /api/goals/:id
// @access  Private
const getUserBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({ seller: req.user._id })

  res.status(200).json(books)
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

  if (!book.seller.compare(req.user._id)) {
    res.status(401)

    throw new Error('Only the seller can update book information')
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
  const book = await Book.findById(req.params.id)

  if (!book) {
    res.status(404)

    throw new Error('Book not found')
  }

  if (!book.seller.compare(req.user._id)) {
    res.status(401)

    throw new Error('Only the seller can delete a book')
  }

  book.remove()

  res.status(200).json({ _id: req.params.id })
})

module.exports = {
  getAllBooks,
  addBook,
  getBook,
  getUserBooks,
  updateBook,
  deleteBook,
}
