import { Outlet } from "react-router-dom";
import Appbar from "../comp/Appbar";
import NavDrawer from "../comp/Drawer";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo, useState } from "react";
import getDesignTokens from "style/MyTheme";

const Root = () => {
  const drawerWidth = 240;

  const [mode, setMyMode] = useState(
    localStorage.getItem("theme") === null
      ? "light"
      : localStorage.getItem("theme") === "light"
      ? "light"
      : "dark"
  );

  const [noneOrblock, setNoneOrblock] = useState("none");
  const [drawerType, setDrawerType] = useState("permanent");

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Appbar {...{ setDrawerType, setNoneOrblock, drawerWidth }} />

      <NavDrawer
        {...{
          setNoneOrblock,
          drawerType,
          setDrawerType,
          noneOrblock,
          setMyMode,
          drawerWidth,
        }}
      />

      <Box
        component="main"
        sx={{
          ml: { sm: `${drawerWidth}px` },
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
