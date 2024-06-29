import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '../api/authApi'
import { User } from '../types'

type InitialState = {
  user: User | null
  isAuthenticated: boolean
}

const initialState: InitialState = {
  user: null,
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.signin.matchFulfilled,
      (state, action) => {
        state.user = action.payload
        state.isAuthenticated = true
      }
    )
    builder.addMatcher(
      authApi.endpoints.signup.matchFulfilled,
      (state, action) => {
        state.user = action.payload
        state.isAuthenticated = true
      }
    )
    builder.addMatcher(authApi.endpoints.me.matchFulfilled, (state, action) => {
      state.user = action.payload
      state.isAuthenticated = true
    })
  },
  selectors: {
    selectIsAuthenticated: (state) => state.isAuthenticated,
    selectUser: (state) => state.user,
  },
})

export const authReducer = authSlice.reducer
export const { logout } = authSlice.actions
export const { selectIsAuthenticated, selectUser } = authSlice.selectors
