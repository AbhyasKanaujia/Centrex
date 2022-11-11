const express = require("express");
require("dotenv").config();
const MorganMiddleware = require("./middlewares/MorganMiddleware.js");
const bookRoutes = require("./routes/bookRoutes.js");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(MorganMiddleware);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/books", bookRoutes);

app.listen(
  PORT,
  console.log(
    `Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`
  )
);
