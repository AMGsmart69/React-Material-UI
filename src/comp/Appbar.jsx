import { Menu } from "@mui/icons-material";
import {
  Avatar,
  Link,
  Typography,
  Toolbar,
  AppBar,
  IconButton,
} from "@mui/material";

const Appbar = ({ drawerWidth, setNoneOrblock }) => {
  return (
    <div>
      <AppBar
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { xs: 0, sm: `${drawerWidth}px` },
        }}
        position="static"
      >
        <Toolbar>
          <IconButton
            sx={{ display: { sm: "none" } }}
            onClick={() => {setNoneOrblock("block")}}
          >
            <Menu />
          </IconButton>
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
