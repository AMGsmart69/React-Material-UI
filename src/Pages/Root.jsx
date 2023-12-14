import { Outlet } from "react-router-dom";
import Appbar from "../comp/Appbar";
import NavDrawer from "../comp/Drawer";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import { grey } from "@mui/material/colors";

const Root = () => {
  const drawerWidth = 240;

  const [mode, setMyMode] = useState(
    localStorage.getItem("theme") === null
      ? "light"
      : localStorage.getItem("theme") === "light"
      ? "light"
      : "dark"
  );

  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            AMGColor: {
              main: grey[300]
            }
          }
        : {
            // palette values for dark mode
            AMGColor: {
              main: grey[800]
            }
          }),
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Appbar drawerWidth={drawerWidth} />

      <NavDrawer setMyMode={setMyMode} drawerWidth={drawerWidth} />

      <Box
        component="main"
        sx={{
          ml: `${drawerWidth}px`,
          display: "flex",
          justifyContent: "center",
          mt: "66px",
        }}
      >
        <Outlet />
      </Box>
    </ThemeProvider>
  );
};

export default Root;
