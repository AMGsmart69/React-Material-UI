import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import MenuIcon from "@mui/icons-material/Menu";
import {Avatar, Link} from "@mui/material"


const Root = () => {
  return (
    <div>
      <AppBar position="static">

        <Toolbar>


          <Link underline="none" href="/" color="inherit" sx={{ flexGrow: 1 }}>My Expenses</Link>

          <Typography sx={{mr:"10px"}} variant="p" color="primart.main">Ahmed M Gamal</Typography>

          <Avatar alt="Ahmed" src="/src/Pages/avatar.jpg" />

        </Toolbar>
      </AppBar>
      {/* <Typography color="error.main" variant="h4">
        A.M.G
      </Typography>

      <Button
        sx={{ mr: "auto", ml: "auto", display: "flex" }}
        startIcon={<DeleteIcon />}
        variant="contained"
        color="primary"
      >
        DELETE
      </Button>

      <IconButton color="info">
        <MenuIcon fontSize="small" />
        <MenuIcon fontSize="medium" />
        <MenuIcon fontSize="larg" />
      </IconButton> */}

      <Outlet />
    </div>
  );
};

export default Root;
