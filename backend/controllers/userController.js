const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel.js')

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, phone, line1, line2, city, state, password } = req.body

  if (!name || !email || !password || !line1 || !city || !state) {
    res.status(400)

    throw new Error('Please add all fields')
  }

  // check if user exists
  const userExists = await User.findOne({ $or: [{ email }, { phone }] })

  if (userExists) {
    res.status(400)

    throw new Error(
      `${
        userExists.email === email ? 'Email ID' : 'Phone number'
      } already registered`
    )
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)

  const hashedPassword = await bcrypt.hash(password, salt)

  // create user
  const user = await User.create({
    name,
    email,
    phone,
    address: { line1, line2, city, state },
    password: hashedPassword,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Authenticate user
// @route   POST /api/login
// @access  Public
const loginUser = (req, res) => {
  res.json({ message: 'Login user' })
}

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = (req, res) => {
  res.json({ message: 'User data display ' })
}

module.exports = {
  registerUser,
  loginUser,
  getMe,
}
