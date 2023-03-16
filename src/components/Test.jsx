import React, { useState, useEffect } from "react";
import "../styles/Test.css";

import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";

import Counter from "./Counter";
import { useNavigate } from "react-router-dom";

export default function Test(props) {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState();
  const [textarea, setTextarea] = useState("");
  const [prevBtn, setPrevBtn] = useState(true);
  const [clickedOption, setClickedOption] = useState(null);

  const handleAnswer = (id) => {
    if (props?.questions[currentQuestion]?.correct_option === id) {
      props?.setScore(props?.score + 3);
      props?.setCorrectAns(props?.correctAns + 1);
    } else {
      props?.setwrongQue(props?.wrongQue + 1);
    }

    setSelected(true);
  };

  const handleSelectedOption = (id) => {
    // if (selected === id) {
    //   return "select";
    // } else if (
    //   selected === id &&
    //   selected !== props?.questions[currentQuestion]?.correct_option
    // ) {
    //   return "wrong";
    // } else if (id == props?.questions[currentQuestion]?.correct_option ) {
    //   return "select";
    // }

    // console.log(id);
    setClickedOption(id);
  };

  const handlePrevious = () => {
    let previousQuestion = currentQuestion - 1;
    setCurrentQuestion(previousQuestion);
    if (currentQuestion === 1) {
      setPrevBtn(true);
    }
    setSelected(true);
  };

  const handleNext = () => {
    let nextQuestion = currentQuestion + 1;
    if (nextQuestion < props?.questions?.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      navigate("/result");
    }
    setSelected(false);
    setPrevBtn(false);

    let perc = props?.questions?.length;
    let scores = +props?.score / 3;
    let res = Math.floor((+scores / +perc) * 100);
    props.setPercentage(res);

    // console.log(res);
  };

  const handleSkip = () => {
    let skippedQuestion = props.skipped + 1;
    props.setSkipped(skippedQuestion);
    let skipQuestion = currentQuestion + 1;
    setCurrentQuestion(skipQuestion);
  };
  const handleSubmit = () => {
    if (props.sribble === "") {
      props.setScribble("Did not write any note...");
    } else {
      props.setScribble(textarea);
    }
    let perc = props?.questions?.length;
    let scores = props?.score;
    let res = Math.floor((+scores / +perc) * 100);
    props.setPercentage(res);
    navigate("/result");
  };

  return (
    <div>
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
        <Box>
          {/* <Typography variant="h6">Score : {props.score}</Typography> */}
          <Counter />
        </Box>
        <Box my={2} mx={4}>
          <Grid mt={4}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="h6">
                  Question {currentQuestion + 1} of {props?.questions?.length}
                </Typography>
                <Box>
                  <Typography variant="h6" my={1}>
                    {props?.questions[currentQuestion]?.question}
                  </Typography>
                </Box>
                <Box>
                  {props?.questions[currentQuestion]?.options?.map((e, i) => {
                    return (
                      <Box
                        key={i}
                        sx={{
                          display: "flex",
                          alignContent: "center",
                          alignItems: "center",
                        }}
                        my={1}
                      >
                        <Typography varinat="h5">{i + 1})</Typography>
                        <button
                          // disabled={selected}
                          onClick={() => handleAnswer(e.id)}
                          className={`singleOption  ${
                            selected && handleSelectedOption(e.id)
                          }`}
                        >
                          {e.value}
                        </button>
                      </Box>
                    );
                  })}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  my={2}
                >
                  <Button
                    variant="contained"
                    sx={{
                      background: "#0E8388",
                      "&:hover": { background: "#2E4F4F" },
                      margin: "10px",
                    }}
                    disabled={prevBtn}
                    onClick={handlePrevious}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      background: "#D61355",
                      "&:hover": { background: "#2E4F4F" },
                      margin: "10px",
                    }}
                    onClick={handleSkip}
                  >
                    Skip
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      background: "#2C3333",
                      "&:hover": { background: "#2E4F4F" },
                      margin: "10px",
                    }}
                    onClick={handleNext}
                    disabled={!selected}
                  >
                    Next
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Grid mx={5}>
                  <Box>
                    <Box>
                      <Typography variant="h6"> Notepad</Typography>

                      <textarea
                        placeholder="Scibble your notes here..."
                        type="textarea"
                        name="textarea"
                        rows="20"
                        cols="50"
                        onChange={(e) => setTextarea(e.target.value)}
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <hr />
        <Box p={4}>
          <Button
            variant="contained"
            sx={{
              background: "#D49B54",
              "&:hover": { background: "#2E4F4F" },
              display: "flex",
              margin: "auto",
              width: "200px",
              fontSize: "20px",
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
}
