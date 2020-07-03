import React from "react";
import Stat from "./stat";

const Conditions = (props) => {
  const condition_immunities = props.data.condition_immunities.map(
    (cond) => cond.name
  );

  return <Stat data={{ condition_immunities }} />;
};

export default Conditions;
