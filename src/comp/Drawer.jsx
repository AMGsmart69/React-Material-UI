import { Toolbar, Drawer, Divider } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { PartyModeSharp } from "@mui/icons-material";

const NavDrawer = ({ drawerWidth }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Drawer
        sx={{
          width: `${drawerWidth}px`,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: `${drawerWidth}px`,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />

        <Divider />

        <List>
          {/* Home Item */}
          <ListItem disablePadding>
            <ListItemButton onClick={() => {navigate("/")}}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>

              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          {/* Create Item */}
          <ListItem disablePadding>
            <ListItemButton onClick={() => {navigate("/create")}}>
              <ListItemIcon>
                <CreateIcon />
              </ListItemIcon>

              <ListItemText primary="Create" />
            </ListItemButton>
          </ListItem>

          {/* Profile Item */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>

              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          {/* Settings Item */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>

              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          {/* Logout Item */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>

              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider />
      </Drawer>
    </div>
  );
};

export default NavDrawer;
