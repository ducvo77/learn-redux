import { useEffect } from "react"
import { Route, useNavigate } from "react-router-dom"

interface PrivateRouteProps {
  element: React.ComponentType<any>
}

const PrivateRoute = ({ element: Element, ...rest }: PrivateRouteProps) => {
  const isLoggedIn = !!localStorage.getItem("access_token")

  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", { replace: true })
    }
  }, [isLoggedIn, navigate])

  return isLoggedIn ? <Route {...rest} element={<Element />} /> : null
}

export default PrivateRoute
