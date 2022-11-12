import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: user ? user : null,
  isSuccess: false,
  isLoading: false,
  isError: false,
  message: '',
}

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await authService.register(user)
    } catch (error) {}
  }
)

export const authSlice = createSlice({
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
