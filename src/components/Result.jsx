import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function (props) {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  return (
    <Box bgcolor="#CBE4DE" sx={{ height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
          width: "100%",
          height: "50px",
          background: "#0E8388",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          padding: "2px 0px",
        }}
      >
        <Typography variant="h4" p={4}>
          Quiz Test
        </Typography>
        <Typography varinat="h5" p={4}>
          Exam Category : {props?.questions[currentQuestion]?.category}
        </Typography>
        <Typography varinat="h5" p={4}>
          {props.email}
        </Typography>
      </Box>

      <Box mt={10}>
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            padding: "2px 0px",
          }}
        >
          <Box
            sx={{
              width: "50%",
              margin: "auto",
              padding: "20px",
              background: "#2C3333",
              color: "#CBE4DE",
            }}
          >
            <Typography variant="h5" textAlign="center">
              Quiz Result
            </Typography>
            <Box>
              <Typography variant="h6">Total Score : {props.score} </Typography>
              <Typography variant="h6">
                Correct Answer : {props.correctAns}{" "}
              </Typography>
              <Typography variant="h6">
                Wrong Answer : {props.wrongQue}{" "}
              </Typography>
              <Typography variant="h6">Skipped Questions : {props.skipped} </Typography>
            </Box>
            <Box m={4} sx={{padding : "5px", border:"1px solid gray"}}>
              <Typography variant="h6">Your Scribble note : </Typography>
              <p>
              {props.scribble}
              </p>
            </Box>
            <Box p={4}>
          <Button
            variant="contained"
            sx={{
              background: "#2E4F4F",
              "&:hover": { background: "#0E8388" },
              display: "flex",
              margin: "auto",
              width: "200px",
              fontSize: "20px",
            }}
            onClick={() => navigate("/login")}
          >
            Exit
          </Button>
        </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
