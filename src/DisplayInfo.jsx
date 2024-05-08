import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const DisplayInfo = () => {
  const values = useSelector((state) => state.counter);

  const parity = values.count % 2 === 0 ? "even" : "odd";

  return (
    <Typography variant="h4">
      {values?.count} is {parity}
    </Typography>
  );
};

export default DisplayInfo;
