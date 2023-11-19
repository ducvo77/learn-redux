import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import { useAppSelector } from "./app/hooks"

import { AdminLayout } from "./components/Layout"
import MainLayout from "./components/Layout/Main"
import { LoginPage } from "./features/auth/pages/LoginPage"
import "./index.css"
import NotFound from "./components/Common/NotFound"
import StudentPage from "./features/student"
import DashboardPage from "./features/dashboard"

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
      element: isLoggedIn ? <AdminLayout /> : <Navigate to="/login" />,
      children: [
        {
          path: "dashboard",
          element: <DashboardPage />,
        },
        {
          path: "students",
          element: <StudentPage />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
