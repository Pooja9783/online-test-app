import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "../styles/Login.css";
import loginImage from "../assets/login-image.avif";

import { Box, Grid, Typography, Button } from "@mui/material";

export default function Login(props) {
  const navigate = useNavigate();
  // const [category, setCategory] = useState("");
  // const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [getRegisterData, setGetRegisterData] = useState([]);
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

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("indexedDBs"));
    setGetRegisterData(items);
  }, []);

  console.log(getRegisterData.email === props.email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!props.email || !login.password || !login.category) {
      alert("Please fill the input field.");
    } else {
      if (
        getRegisterData.email == props.email ||
        getRegisterData.password == login.password ||
        login.category !== ""
      ) {
        setError(false);
        props.fetchQuestions(login.category);
        navigate("/test");
      } else {
        setError(true);
        return;
      }
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
            style={{ width: "650px", height: "100vh" }}
          />
        </Grid>
        <Grid item xs={6}>
          <Box p={2} className="login-form">
            <Typography variant="h4" color="#2c3333" textAlign="left" p={1}>
              Login
            </Typography>

            {error ? (
              <Box my={2}>
                <Typography variant="h6" bgcolor="red" color="white" py={1}>
                  Please Fill the correct Email or Password.
                </Typography>
              </Box>
            ) : (
              ""
            )}

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
                {props.data.map((element, i) => {
                  return (
                    <option key={i} value={element.category}>
                      {element.category}
                    </option>
                  );
                })}
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
              <Link to="/register">Don't have an Account ?</Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
