import React from "react";
import { Outlet } from "react-router-dom";
import { Avatar, Link, Typography, Toolbar, AppBar } from "@mui/material";

const Root = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link
            sx={{
              flexGrow: 1,
              "&:hover": { fontSize: "17px", transition: ".5s ease" },
            }}
            underline="none"
            href="/"
            color="inherit"
          >
            My Expenses
          </Link>

          <Typography mr={2} color="primart.main">
            Ahmed M Gamal
          </Typography>

          <Avatar alt="Ahmed" src="./imgs/avatar.jpg" />
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
