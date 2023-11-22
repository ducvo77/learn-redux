import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      state.logging = true
    },

    loginSuccess: (state, action: PayloadAction<User>) => {
      state.logging = false
      state.currentUser = action.payload
      state.isLoggedIn = true
    },

    loginFailed: (state, action: PayloadAction<string>) => {
      state.logging = false
    },

    logout: (state) => {
      state.isLoggedIn = false
      state.currentUser = undefined
    },
  },
})

// Actions
export const authActions = authSlice.actions

// Selectors
export const authIsLoggedIn = (state: RootState) => state.auth.isLoggedIn
export const authLogging = (state: RootState) => state.auth.logging
export const authCurrentUser = (state: RootState) => state.auth.currentUser

// Reducers
const authReducer = authSlice.reducer
export default authReducer
