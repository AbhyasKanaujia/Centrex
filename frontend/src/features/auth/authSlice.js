import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: user ? user : null,
  isSuccess: false,
  isLoading: false,
  isError: false,
  message: '',
}

export const authSlice = crateSlice({
  name: 'auth',
  initialState,
  reducer: {
    reset: (state) => {
      state.isSuccess = false
      state.isLoading = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: () => {},
})

export const { reset } = authSlice.actions
export default authSlice.reducer
