const express = require('express')
const colors = require('colors')
require('dotenv').config()
const { errorHandler } = require('./middlewares/errorHandler.js')
const MorganMiddleware = require('./middlewares/MorganMiddleware.js')
const bookRoutes = require('./routes/bookRoutes.js')
const userRoutes = require('./routes/userRoutes.js')
const connectDB = require('./configs/db.js')

const PORT = process.env.PORT || 5000

connectDB()

const app = express()

app.use(MorganMiddleware)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/books', bookRoutes)
app.use('/api/user', userRoutes)

app.use(errorHandler)

app.listen(
  PORT,
  console.log(
    `Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`
  )
)
