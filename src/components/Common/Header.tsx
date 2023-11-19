import MenuIcon from "@mui/icons-material/Menu"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../app/hooks"
import { authActions } from "../../features/auth/authSlice"
import LogoutIcon from "@mui/icons-material/Logout"

export default function ButtonAppBar() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogoutClick = () => {
    dispatch(authActions.logout())
    navigate("/login")
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button
            color="inherit"
            onClick={handleLogoutClick}
            startIcon={<LogoutIcon />}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
