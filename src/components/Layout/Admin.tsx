import Box from "@mui/material/Box"
import { Outlet } from "react-router-dom"
import Header from "../Common/Header"
import SideBar from "../Common/SideBar"

export function AdminLayout() {
  // const Routes = useRoutes()
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "auto 1fr",
        gridTemplateColumns: "240px 1fr",
        gridTemplateAreas: `"header header" "sidebar main"`,
        height: "100vh",
      }}
    >
      <Box sx={{ gridArea: "header", border: "1px solid #999" }}>
        <Header />
      </Box>
      <Box sx={{ gridArea: "sidebar", border: "1px solid #999" }}>
        <SideBar />
      </Box>
      <Box sx={{ gridArea: "main", border: "1px solid #999", p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  )
}
