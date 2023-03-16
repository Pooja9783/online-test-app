import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "../styles/Login.css";
import loginImage from "../assets/login-image.avif";

import { Box, Grid, Typography, Button } from "@mui/material";

export default function Login(props) {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
    category: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const items = JSON.parse(localStorage.getItem("indexedDBs"));

    if (
      (items?.email == props?.email &&
        items?.password == login?.password &&
        login?.category) ||
      (props.email === "testuser@gmail.com" &&
        login.password == "testuser@2021")
    ) {
      props.fetchQuestions(login.category);
      navigate("/test");
    } else if (
      props?.email == "" ||
      login?.password == "" ||
      login?.category == ""
    ) {
      alert("Please fill the input field");
    } else {
      alert("Your Email or Password not correct.");
    }
  };

  return (
    <Box>
      <Grid
        sx={{
          display: {
            xs: "block",
            sm: "flex",
            lg: "flex",
          },
        }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item xs={6}>
          <img
            src={loginImage}
            alt=""
            style={{ width: "650px", height: "100vh", objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={6}>
          <Box p={2} className="login-form">
            <Typography variant="h4" color="#2c3333"  p={1}>
              Login
            </Typography>
<Box ml={1} >
  <Typography variant="body2" textAlign='left'color='gray'>email : testuser@gmail.com</Typography>
  <Typography variant="body2" textAlign='left' color='gray'>password : testuser@2021</Typography>

</Box>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                onChange={(e) => props.setEmail(e.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                onChange={(e) => handleInput(e)}
              />
              <select
                name="category"
                onClick={(e) => handleInput(e)}
                id="category"
              >
                <option value="">--Select Category--</option>
                <option value="arts">Arts</option>
                <option value="sports">Sports</option>
                <option value="physics">Physics</option>
                <option value="history">History</option>
                {/* {props.data.map((element, i) => {
                  return (
                    <option key={i} value={element.category}>
                      {element.category}
                    </option>
                  );
                })} */}
              </select>{" "}
              <Button
                type="submit"
                variant="contained"
                sx={{
                  background: "#2C3333",
                  "&:hover": { background: "#2E4F4F" },
                  margin: "10px",
                  justifyContent: "left",
                }}
              >
                Login
              </Button>
            </form>
            <Box>
              <Link to="/register">Don't have an account ?</Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
