import { Box, Paper, Typography, IconButton } from "@mui/material";
import "./Home.css";
import { Close } from "@mui/icons-material";

const Home = () => {
  return (
    <Box sx={{width: "330px"}}>
      <Paper
        sx={{
          position: "relative",
          width: "366px",
          display: "flex",
          justifyContent: "space-between",
          pt: "27px",
          pb: "7px",
          mt: "22px",
        }}
      >
        <Typography sx={{ ml: "16px", fontSize: "1.3em" }} variant="h6">
          GYM
        </Typography>
        <Typography
          color="success.main"
          sx={{
            mr: "13px",
            fontWeight: "bold",
            fontSize: "1.4em",
            opacity: ".8",
          }}
          variant="h6"
        >
          $100
        </Typography>

        <IconButton sx={{ position: "absolute", top: "0", right: "0" }}>
          <Close sx={{ fontSize: "20px" }} />
        </IconButton>
      </Paper>

      <Paper
        sx={{
          position: "relative",
          width: "366px",
          display: "flex",
          justifyContent: "space-between",
          pt: "27px",
          pb: "7px",
          mt: "22px",
        }}
      >
        <Typography sx={{ ml: "16px", fontSize: "1.3em" }} variant="h6">
          Water
        </Typography>
        <Typography
          color="success.main"
          sx={{
            mr: "13px",
            fontWeight: "bold",
            fontSize: "1.4em",
            opacity: ".8",
          }}
          variant="h6"
        >
          $22
        </Typography>

        <IconButton sx={{ position: "absolute", top: "0", right: "0" }}>
          <Close sx={{ fontSize: "20px" }} />
        </IconButton>
      </Paper>

      <Paper
        sx={{
          position: "relative",
          width: "366px",
          display: "flex",
          justifyContent: "space-between",
          pt: "27px",
          pb: "7px",
          mt: "22px",
        }}
      >
        <Typography sx={{ ml: "16px", fontSize: "1.3em" }} variant="h6">
          Food
        </Typography>
        <Typography
          color="success.main"
          sx={{
            mr: "13px",
            fontWeight: "bold",
            fontSize: "1.4em",
            opacity: ".8",
          }}
          variant="h6"
        >
          $30
        </Typography>

        <IconButton sx={{ position: "absolute", top: "0", right: "0" }}>
          <Close sx={{ fontSize: "20px" }} />
        </IconButton>
      </Paper>

      <Paper
        sx={{
          position: "relative",
          width: "366px",
          display: "flex",
          justifyContent: "space-between",
          pt: "27px",
          pb: "7px",
          mt: "22px",
        }}
      >
        <Typography sx={{ ml: "16px", fontSize: "1.3em" }} variant="h6">
          Bills
        </Typography>
        <Typography
          color="success.main"
          sx={{
            mr: "13px",
            fontWeight: "bold",
            fontSize: "1.4em",
            opacity: ".8",
          }}
          variant="h6"
        >
          $30
        </Typography>

        <IconButton sx={{ position: "absolute", top: "0", right: "0" }}>
          <Close sx={{ fontSize: "20px" }} />
        </IconButton>
      </Paper>

      <Typography
        sx={{ mt: 4, textAlign: "center" }}
        variant="h6"
        color="inherit"
      >
        &#128073; You Spend <Typography sx={{fontWeight:"bold"}} 
// @ts-ignore
        variant="p" color="success.main">$182</Typography>
      </Typography>
    </Box>
  );
};

export default Home;
