import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setCount } from "./store/slices/counterSlice";

const ResetCount = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        onClick={() => {
          dispatch(setCount(0));
        }}
      >
        Reset count
      </Button>
    </div>
  );
};

export default ResetCount;
