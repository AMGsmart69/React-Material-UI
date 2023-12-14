import {
  Toolbar,
  Drawer,
  Divider,
  Button,
  useTheme,
  IconButton,
} from "@mui/material";
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
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Brightness4,
  Brightness7,
  NfcSharp,
  PartyModeSharp,
} from "@mui/icons-material";

const NavDrawer = ({ drawerWidth, setMyMode, noneOrblock }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const currentLoc = useLocation();

  return (
    <div>
      <Drawer
        sx={{
          display: {xs: noneOrblock, sm: "block"},
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
        <List>
          <ListItem
            sx={{ mb: 2, display: "flex", justifyContent: "center" }}
            disablePadding
          >
            <IconButton
              size="small"
              onClick={() => {
                localStorage.setItem(
                  "theme",
                  theme.palette.mode === "light" ? "dark" : "light"
                );
                setMyMode(theme.palette.mode === "light" ? "dark" : "light");
              }}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7 sx={{ color: "orange" }} />
              ) : (
                <Brightness4 />
              )}
            </IconButton>
          </ListItem>

          <Divider />

          {/* Home Item */}
          <ListItem
            sx={{
              backgroundColor:
                // @ts-ignore
                currentLoc.pathname === "/" ? theme.palette.AMGColor.main : null,
            }}
            disablePadding
          >
            <ListItemButton
              onClick={() => {
                navigate("/");
              }}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>

              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          {/* Create Item */}
          <ListItem
            sx={{
              backgroundColor:
                // @ts-ignore
                currentLoc.pathname === "/create" ? theme.palette.AMGColor.main : null,
            }}
            disablePadding
          >
            <ListItemButton
              onClick={() => {
                navigate("/create");
              }}
            >
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
