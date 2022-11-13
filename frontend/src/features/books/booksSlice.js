import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import booksService from './booksService'

const initialState = {
  books: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
}

export const createBook = createAsyncThunk(
  'books/create',
  async (bookData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await booksService.createBook(bookData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const getBooks = createAsyncThunk(
  '/books/getAll',
  async (_, thunkAPI) => {
    try {
      return await booksService.getBooks()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const getBook = createAsyncThunk(
  '/books/getBook',
  async (bookId, thunkAPI) => {
    try {
      return await booksService.getBook(bookId)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const getUserBooks = createAsyncThunk(
  'books/getUserBooks',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await booksService.getUserBooks(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      // Create Book
      .addCase(createBook.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.books.push(action.payload)
      })
      .addCase(createBook.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      // Get all books
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.books = action.payload
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      // Get single book
      .addCase(getBook.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getBook.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.books = [action.payload]
      })
      .addCase(getBook.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      // Get all user books
      .addCase(getUserBooks.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUserBooks.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.books = action.payload
      })
      .addCase(getUserBooks.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = booksSlice.actions
export default booksSlice.reducer
