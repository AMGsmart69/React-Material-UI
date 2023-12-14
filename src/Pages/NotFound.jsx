import { Box, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box>
      <Typography sx={{ fontWeight: "bold" }} color="error.main" variant="h2">
        Not Found
      </Typography>
    </Box>
  );
};

export default NotFound;
