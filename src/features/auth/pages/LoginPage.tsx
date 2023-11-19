// tsrpfc

import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import { CircularProgress, Paper } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { authActions } from "../authSlice"
import { useNavigate } from "react-router-dom"

export function LoginPage() {
  const dispatch = useAppDispatch()
  const islogging = useAppSelector((state) => state.auth.logging)
  const navigate = useNavigate()

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
          {islogging ? <CircularProgress /> : " Fake login"}
        </Button>
      </Paper>
    </Box>
  )
}
