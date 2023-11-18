// https://stackoverflow.com/questions/75847664/public-private-routing-in-react-v6

import CssBaseline from "@mui/material/CssBaseline"
import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./App"
import { store } from "./app/store"
import { NotFound } from "./components/Common"
import PrivateRoute from "./components/Common/PrivateRoute"
import { AdminLayout } from "./components/Layout"
import { LoginPage } from "./features/auth/pages/LoginPage"
import "./index.css"

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
      <CssBaseline />
    </Provider>
  </React.StrictMode>,
)
