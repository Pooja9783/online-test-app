import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
export default function Counter() {
  const [mintues, setMintues] = useState(4);
  const [seconds, setSeconds] = useState(59);

  let interval;
  useEffect(() => {
    interval = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 0) {
        setMintues(mintues - 1);
        setSeconds(59);
      }
      if (mintues == 0) {
        setSeconds("0");
        setMintues("0");
      }
    }, 1000);

    return () => clearInterval(interval);
  });
  return (
    <Box>
      <Typography variant="h6">
        Timer : {mintues < 10 ? "0" + mintues : mintues} :{" "}
        {seconds < 10 ? "0" + seconds : seconds}
      </Typography>
    </Box>
  );
}
