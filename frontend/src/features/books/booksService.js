import axios from 'axios'

const API_URL = '/api/books'

// Create new books
const createBook = async (bookData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = axios.post(API_URL, bookData, config)

  return response.data
}

const booksService = { createBook }

export default booksService
