const express = require("express");
require("dotenv").config();
const bookRoutes = require("./routes/bookRoutes.js");

const PORT = process.env.PORT || 5000;

const app = express();

app.use("/api/books", bookRoutes);

app.listen(
  PORT,
  console.log(
    `Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`
  )
);
