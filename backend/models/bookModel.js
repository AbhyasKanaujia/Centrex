const mongoose = require('mongoose')

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      requied: true,
    },
    price: {
      type: Number,
      required: true,
    },
    isbn: {
      type: String,
      required: true,
    },
    seller: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    sellerContact: {
      type: String,
      required: true,
    },
    sellerName: {
      type: String,
      require: true,
    },
    sellerAddress: {
      type: String,
      required: true,
    },
    visible: {
      type: Boolean,
      default: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Book', bookSchema)
