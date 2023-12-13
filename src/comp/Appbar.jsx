import { Avatar, Link, Typography, Toolbar, AppBar } from "@mui/material";

const Appbar = ({ drawerWidth }) => {
  return (
    <div>
      <AppBar
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        position="static"
      >
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
    </div>
  );
};

export default Appbar;
