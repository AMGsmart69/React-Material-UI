import React from "react";
import "./Create.css";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Create = () => {
  return (
    <Box
      //   className="msg"
      component="form"
      sx={{ width: "380px", display: "flex", flexDirection: "column" }}
    >
      <TextField
        label="Transaction Title"
        sx={{ mt: "22px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">&#128073;</InputAdornment>
          ),
        }}
        variant="filled"
      />

      <TextField
        label="Amount"
        sx={{ mt: "22px" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />

      <Button
        color="success"
        sx={{ width: "25%", mt: "15px" }}
        variant="contained"
      >
        Submit <KeyboardArrowRightIcon />
      </Button>
    </Box>
  );
};

export default Create;
