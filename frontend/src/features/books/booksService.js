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

const getBook = async (bookId) => {
  const response = await axios.get(API_URL + `/${bookId}`)

  return response.data
}

const getUserBooks = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + '/my', config)

  return response.data
}

const booksService = { createBook, getBooks, getBook, getUserBooks }

export default booksService
