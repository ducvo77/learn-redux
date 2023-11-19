import Button from "@mui/material/Button"

import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../app/hooks"
import { authActions } from "../../features/auth/authSlice"

function MainLayout() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogoutClick = () => {
    dispatch(authActions.logout())
    navigate("/login")
  }

  return (
    <div>
      Hello world
      <Button
        onClick={handleLogoutClick}
        variant="contained"
        color="warning"
        sx={{ fontSize: "0.75rem" }}
      >
        Fake logout
      </Button>
    </div>
  )
}

export default MainLayout
