import React from "react";

// String -> String
const bookCase = (string) => {
  return string.replace(/^[a-z]|_[a-z]/g, (a) =>
    a.toUpperCase().replace("_", " ")
  );
};

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
