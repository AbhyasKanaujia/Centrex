const express = require('express')
const { protect } = require('../middlewares/authMiddleware.js')

const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController.js')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

module.exports = router
