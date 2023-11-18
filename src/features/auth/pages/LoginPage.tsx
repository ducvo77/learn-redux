// tsrpfc

import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import { Paper } from "@mui/material"
import { useAppDispatch } from "../../../app/hooks"
import { authActions } from "../authSlice"

export function LoginPage() {
  const dispatch = useAppDispatch()

  const handleLoginClick = () => {
    dispatch(
      authActions.login({
        username: "",
        password: "",
      }),
    )
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
          Fake login
        </Button>
      </Paper>
    </Box>
  )
}
