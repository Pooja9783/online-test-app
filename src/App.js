import React, { useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";

import sampleData from "./sampleData.json";
import Login from "./components/Login";
import Test from "./components/Test";
import Register from "./components/Register";
import Result from "./components/Result";

function App() {
  const [data, setData] = useState(sampleData);
  const [email, setEmail] = useState("");
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [skipped, setSkipped] = useState(0);
  const [wrongQue, setwrongQue] = useState(0);
  const [scribble, setScribble] = useState("");
  const [percentage, setPercentage] = useState('');



  const fetchQuestions = (category) => {
    let filterCategory = data?.filter((cate) => {
      return cate.category === category;
    });
    setQuestions(filterCategory);
  };
  // console.log(questions);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route index element={<Navigate to="/login" replace />} />

          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={
              <Login
                data={data}
                email={email}
                setEmail={setEmail}
                fetchQuestions={fetchQuestions}
              />
            }
          />
          <Route
            path="/test"
            element={
              <Test
                questions={questions}
                email={email}
                score={score}
                setScore={setScore}
                setCorrectAns={setCorrectAns}
                setwrongQue={setwrongQue}
                correctAns={correctAns}
                wrongQue={wrongQue}
                setSkipped={setSkipped}
                skipped={skipped}
                setScribble={setScribble}
                scribble={scribble}
                setPercentage={setPercentage}
              />
            }
          />
          <Route
            path="/result"
            element={
              <Result
                questions={questions}
                email={email}
                score={score}
                setScore={setScore}
                setCorrectAns={setCorrectAns}
                setwrongQue={setwrongQue}
                correctAns={correctAns}
                wrongQue={wrongQue}
                skipped={skipped}
                scribble={scribble}
                percentage={percentage}


              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
