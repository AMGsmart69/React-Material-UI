import { Box, Paper, Typography, IconButton } from "@mui/material";
import "./Home.css";
import { Close } from "@mui/icons-material";

const Home = () => {
  return (
    <Box>
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
            opacity: ".8"
          }}
          variant="h6"
        >
          $100
        </Typography>

        <IconButton sx={{ position: "absolute", top: "0", right: "0" }}>
          <Close sx={{ fontSize: "20px" }} />
        </IconButton>
      </Paper>

    </Box>
  );
};

export default Home;
