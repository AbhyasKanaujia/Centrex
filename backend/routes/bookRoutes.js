const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  addBook,
  getBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController.js");

router.route("/").get(getAllBooks).post(addBook);
router.route("/:id").get(getBook).put(updateBook).delete(deleteBook);

module.exports = router;
