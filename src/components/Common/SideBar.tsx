import DashboardIcon from "@mui/icons-material/Dashboard"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { NavLink } from "react-router-dom"
import Link from "@mui/material/Link"

export default function SideBar() {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List>
          <Link
            component={NavLink}
            to="/admin/dashboard"
            sx={{
              textDecoration: "none",
              color: "inherit",
              "&.active li": {
                bgcolor: (theme) => theme.palette.action.selected,
              },
            }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link
            component={NavLink}
            to="/admin/students"
            sx={{
              textDecoration: "none",
              color: "inherit",
              "&.active li": {
                bgcolor: (theme) => theme.palette.action.selected,
              },
            }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PeopleAltIcon />
                </ListItemIcon>
                <ListItemText primary="Students" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </nav>
    </Box>
  )
}
