import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import { useAppSelector } from "./app/hooks"
import { NotFound } from "./components/Common"
import MainLayout from "./components/Layout/Main"
import { LoginPage } from "./features/auth/pages/LoginPage"
import "./index.css"

function App() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)
  console.log(isLoggedIn)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <NotFound />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/admin",
      element: isLoggedIn ? <MainLayout /> : <Navigate to="/login" />,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
