import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  books: [],
  isLoading: false,
  issucess: false,
  isError: false,
  message: '',
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
})

export const { reset } = booksSlice.actions
export default booksSlice.reducer
