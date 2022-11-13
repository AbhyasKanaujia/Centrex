import axios from 'axios'

const API_URL = '/api/books'

// Create a book
const createBook = async (bookData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, bookData, config)

  return response.data
}

const booksService = { createBook }

export default booksService
