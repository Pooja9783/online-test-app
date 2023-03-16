import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";

import loginImage from "../assets/login-image.avif";

export default function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const [register, setRegister] = useState({
    email: "",
    password: "",
    rePassword: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setRegister({
      ...register,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (register.password !== register.rePassword) {
      alert("Both password doesn't match");
    } else {
      if (
        register.email !== "" &&
        register.password !== "" &&
        register.rePassword !== ""
      ) {
        const user = localStorage.setItem(
          "indexedDBs",
          JSON.stringify(register)
        );

        setError(true);
        navigate("/login");
      } else {
        setError(false);
        alert("Please Fill All the Input Field");
      }
    }
  };

  return (
    <div>
      <Box>
        <Grid
          sx={{
            display: {
              xs: "block",
              sm: "block",
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
              alt="the register page image"
              style={{ width: "650px", height: "100vh", objectFit: "cover" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Box p={2} className="login-form">
              <Typography variant="h4" color="#2c3333" textAlign="left" p={1}>
                Register New User
              </Typography>
              <p>{error ? "Please Fill the input fields" : ""}</p>
              <form action="" onSubmit={(e) => handleSubmit(e)}>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  onChange={(e) => handleInput(e)}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  onChange={(e) => handleInput(e)}
                />
                <input
                  type="password"
                  name="rePassword"
                  placeholder="Enter Your Password"
                  onChange={(e) => handleInput(e)}
                />
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
                  Register
                </Button>
              </form>
              <Box>
                <Link to="/login">Do have an account ?</Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
