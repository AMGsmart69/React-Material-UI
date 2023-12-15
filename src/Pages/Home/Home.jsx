import { Box, Paper, Typography, IconButton } from "@mui/material";
import "./Home.css";
import { Close } from "@mui/icons-material";
import { useEffect, useState } from "react";

const Home = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/mydata")
      .then((response) => response.json())
      .then((data) => setMyData(data));
  }, []);

  let totalPrice = 0;
  return (
    <Box sx={{ width: "330px" }}>
      {myData.map((item) => {
        totalPrice += item.price;
        return (
          <Paper
            key={item.id}
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
              {item.title}
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
              ${item.price}
            </Typography>

            <IconButton
              onClick={() => {
                fetch(`http://localhost:3100/mydata/${item.id}`, {
                  method: "DELETE",
                });

                const newArr = myData.filter((myObject) => {
                  return myObject.id !== item.id;
                });

                setMyData(newArr);
              }}
              sx={{ position: "absolute", top: "0", right: "0" }}
            >
              <Close sx={{ fontSize: "20px" }} />
            </IconButton>
          </Paper>
        );
      })}

      <Typography
        sx={{ mt: 4, textAlign: "center" }}
        variant="h6"
        color="inherit"
      >
        &#128073; You Spend{" "}
        <Typography
          sx={{ fontWeight: "bold" }}
          // @ts-ignore
          variant="p"
          color="success.main"
        >
          ${totalPrice}
        </Typography>
      </Typography>
    </Box>
  );
};

export default Home;
