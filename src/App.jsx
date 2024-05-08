import React from "react";
import "./App.css";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, increaseCount } from "./store/slices/counterSlice";
import DisplayInfo from "./DisplayInfo";
import ResetCount from "./ResetCount";

const App = () => {
  const values = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <Box>
      <Button
        color="success"
        variant="contained"
        onClick={() => {
          dispatch(increaseCount());
        }}
      >
        Increase
      </Button>
      {/* <Typography variant="h3">{values.count}</Typography> */}
      <Button
        color="error"
        variant="contained"
        onClick={() => {
          dispatch(decreaseCount());
        }}
      >
        Decrease
      </Button>

      <DisplayInfo />
      <ResetCount />
    </Box>
  );
};

export default App;
