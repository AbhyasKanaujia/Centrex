const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get books" });
});

router.post("/", (req, res) => {
  res.status(201).json({ messag: "Add book" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update book with id ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete book with id ${req.params.id}` });
});

module.exports = router;
