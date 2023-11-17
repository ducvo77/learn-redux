// https://stackoverflow.com/questions/75847664/public-private-routing-in-react-v6

import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./App"
import { store } from "./app/store"
import { NotFound } from "./components/Common"
import { AdminLayout } from "./components/Layout"
import "./index.css"
import { LoginPage } from "./features/auth/pages/LoginPage"
import PrivateRoute from "./components/Common/PrivateRoute"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/admin",
    element: <PrivateRoute element={AdminLayout} />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
