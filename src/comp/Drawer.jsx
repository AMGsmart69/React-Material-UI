import {
  Drawer,
  Divider,
  useTheme,
  IconButton,
  Box,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CreateIcon from "@mui/icons-material/Create";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Brightness4,
  Brightness7,
  Home
} from "@mui/icons-material";

const NavDrawer = ({
  drawerWidth,
  setMyMode,
  noneOrblock,
  drawerType,
  setNoneOrblock,
  setDrawerType,
}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const currentLoc = useLocation();

  const myList = [
    { text: "Home", icon: <Home />, path: "/" },
    { text: "Create", icon: <CreateIcon />, path: "/create" },
    { text: "Profile", icon: <PersonIcon />, path: "/profile" },
    { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
  ];

  return (
    <Box component="nav">
      <Drawer
        sx={{
          display: { xs: noneOrblock, sm: "block" },
          width: `${drawerWidth}px`,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: `${drawerWidth}px`,
            boxSizing: "border-box",
          },
        }}
        variant={drawerType}
        anchor="left"
        open={true}
        onClose={() => {
          setDrawerType("permanent");
          setNoneOrblock("none");
        }}
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

          {myList.map((item) => {
            return (
              <ListItem
                key={item.text}
                sx={{
                  backgroundColor:
                    // @ts-ignore
                    currentLoc.pathname === item.path
                      ? // @ts-ignore
                        theme.palette.AMGColor.main
                      : null,
                }}
                disablePadding
              >
                <ListItemButton
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>

                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            );
          })}

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
    </Box>
  );
};

export default NavDrawer;
