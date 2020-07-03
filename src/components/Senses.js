import React from "react";
import Stat from "./Stat";

const Senses = (props) => {
  const { data } = props;
  const senses = Object.keys(data).map((key) => `${key} ${data[key]}`);

  return <Stat data={{ senses }} />;
};

export default Senses;
