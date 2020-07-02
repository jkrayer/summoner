import React from "react";

const Speed = (props) => {
  const { data } = props;
  const speed = Object.keys(data)
    .reduce((acc, key) => acc.concat(`${key}: ${data[key]}`), [])
    .join(", ");

  return (
    <React.Fragment>
      <dt>{"Speed"}</dt>
      <dd>{speed}</dd>
    </React.Fragment>
  );
};

export default Speed;
