import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { api } from './api'
import { authReducer, listenerMiddleware } from '@modules/Auth/'

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
})

export default configureStore({
  reducer: rootReducer,
  middleware: (getDeaultMiddleware) =>
    getDeaultMiddleware()
      .concat(api.middleware)
      .prepend(listenerMiddleware.middleware),
})
