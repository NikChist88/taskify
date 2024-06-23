import { configureStore, combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  // [usersApi.reducerPath]: usersApi.reducer,
  // filters: filtersReducer,
})

export default configureStore({
  reducer: rootReducer,
  middleware: (getDeaultMiddleware) =>
    getDeaultMiddleware().concat(),
})
