const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel.js')

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}

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
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Authenticate user
// @route   POST /api/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { emailOrPhone, password } = req.body

  const user = await User.findOne({
    $or: [{ email: emailOrPhone }, { phone: emailOrPhone }],
  })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200)

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)

    throw new Error('Invalid credentials')
  }
})

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user)
})

module.exports = {
  registerUser,
  loginUser,
  getMe,
}
