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

const getBooks = async () => {
  const response = await axios.get(API_URL)

  return response.data
}

const booksService = { createBook, getBooks }

export default booksService
