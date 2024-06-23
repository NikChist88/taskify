import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import { MainLayout } from './layouts/MainLayout'
import { HomePage, AuthPage, NotFoundPage } from './pages'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import './index.css'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<MainLayout />}
    >
      <Route
        index
        element={<HomePage />}
      />
      <Route
        path="auth"
        element={<AuthPage />}
      />
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-center"
      autoClose={1500}
      theme="light"
    />
  </Provider>
)
