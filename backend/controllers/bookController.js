// @desc    Get All Books
// @route   GET /api/books
// @access  Public
const getAllBooks = (req, res) => {
  res.status(200).json({ message: "Get all books" });
};

// @desc    Add a book
// @route   POST /api/books
// @access  Private
const addBook = (req, res) => {
  res.status(200).json({ message: "Add a book" });
};

// @desc    Get a book
// @route   POST /api/books/:id
// @access  Public
const getBook = (req, res) => {
  res.status(200).json({ message: `Add a book with id ${req.params.id}` });
};

// @desc    Update a book
// @route   POST /api/goals/:id
// @access  Private
const updateBook = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};
// @desc    Delete a book
// @route   POST /api/goals/:id
// @access  Private
const deleteBook = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = {
  getAllBooks,
  addBook,
  getBook,
  updateBook,
  deleteBook,
};
