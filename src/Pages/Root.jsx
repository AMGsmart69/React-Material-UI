import { Outlet } from "react-router-dom";
import Appbar from "../comp/Appbar";
import NavDrawer from "../comp/Drawer";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";

const Root = () => {
  const drawerWidth = 240;

  const [myMode, setMyMode] = useState("dark")
  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode: myMode,
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
