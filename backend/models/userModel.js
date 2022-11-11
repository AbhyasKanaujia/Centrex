const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [ture, 'Please add a name'],
    },
    email: {
      type: String,
      required: [ture, 'Please add an email'],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, 'Please add a phone number'],
      unique: true,
    },
    address: {
      line1: {
        type: String,
        require: true,
      },
      line2: {
        type: String,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
    },
    password: {
      type: String,
      required: [ture, 'Please add a password'],
    },
  },
  { timestamps: true }
)

model.exports = mongose.model('User', userSchema)
