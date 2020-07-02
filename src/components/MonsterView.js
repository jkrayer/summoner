import React from "react";

const MonsterView = (props) => {
  const { data } = props;

  return <h1>{data.name}</h1>;
};

export default MonsterView;
