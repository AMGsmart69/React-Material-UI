import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Root = () => {
  return (
    <div>
      <Typography
        color="error.main"
        variant="h4"
      >
        A.M.G
      </Typography>

      <Outlet />
    </div>
  );
};

export default Root;
