import { CircularProgress, Paper } from "@mui/material"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { authActions, authLogging } from "../authSlice"

export function LoginPage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const auhtLogging = useAppSelector(authLogging)
  const handleLoginClick = () => {
    dispatch(
      authActions.login({
        username: "",
        password: "",
      }),
    )
    navigate("/")
  }

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h2" sx={{ fontSize: "1.275rem", fontWeight: 500 }}>
          Student Managgement
        </Typography>
        <Button
          onClick={handleLoginClick}
          variant="contained"
          color="secondary"
          sx={{ fontSize: "0.75rem" }}
        >
          {auhtLogging ? <CircularProgress /> : " Fake login"}
        </Button>
      </Paper>
    </Box>
  )
}
