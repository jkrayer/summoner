import React from "react";

const Score = (props) => {
  const val = Math.floor(props.score / 2 - 5);
  const operator = val > 0 ? "+" : "";
  const modifier = [" (", operator, val, ")"].join("");

  return <span>{[props.score, modifier].join("")}</span>;
};

export default Score;
