import React from "react";
import "./Create.css";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const toNav = useNavigate();
  return (
    <Box
      autoComplete="off"
      component="form"
      sx={{ width: "380px", display: "flex", flexDirection: "column" }}
    >
      <TextField
        onChange={(e) => {
          setTitle(e.target.value);
        }}
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
        onChange={(e) => {
          setPrice(Number(e.target.value));
        }}
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
        onClick={() => {
          fetch("http://localhost:3100/mydata", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, price }),
          }).then(() => {
            toNav("/");
          });
        }}
      >
        Submit <KeyboardArrowRightIcon />
      </Button>
    </Box>
  );
};

export default Create;
