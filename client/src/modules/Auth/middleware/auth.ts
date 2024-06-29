import { createListenerMiddleware } from '@reduxjs/toolkit'
import { authApi } from '../api/authApi'

export const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
  matcher: authApi.endpoints.signup.matchFulfilled,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners()

    if (action.payload.access_token) {
      localStorage.setItem('token', action.payload.access_token)
    }
  },
})

listenerMiddleware.startListening({
  matcher: authApi.endpoints.signin.matchFulfilled,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners()

    if (action.payload.access_token) {
      localStorage.setItem('token', action.payload.access_token)
    }
  },
})
