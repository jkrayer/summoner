import React from "react";
import { bookCase } from "../utilities/helpers";

const Stat = (props) => {
  const { data } = props;
  const key = Object.keys(data)[0];
  const val = data[key];

  if (val.length === 0) {
    return null;
  }

  return (
    <React.Fragment>
      <dt>{bookCase(key)}</dt>
      <dd>{val.join(", ")}</dd>
    </React.Fragment>
  );
};

export default Stat;
