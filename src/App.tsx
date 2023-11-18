import Button from "@mui/material/Button"
import { useAppDispatch } from "./app/hooks"
import { authActions } from "./features/auth/authSlice"

function App() {
  const dispatch = useAppDispatch()

  const handleLogoutClick = () => {
    dispatch(authActions.logout())
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

export default App
