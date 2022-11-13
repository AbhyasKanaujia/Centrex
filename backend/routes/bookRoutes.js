const express = require('express')
const { protect } = require('../middlewares/authMiddleware.js')

const router = express.Router()
const {
  getAllBooks,
  addBook,
  getBook,
  getUserBooks,
  updateBook,
  deleteBook,
} = require('../controllers/bookController.js')

router.route('/').get(getAllBooks).post(protect, addBook)
router.route('/my').get(protect, getUserBooks)
router
  .route('/:id')
  .get(getBook)
  .put(protect, updateBook)
  .delete(protect, deleteBook)

module.exports = router
