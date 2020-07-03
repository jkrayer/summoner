import React from "react";
import { bookCase } from "../utilities/helpers";

const Ability = (props) => {
  const { data } = props;
  const key = Object.keys(data)[0];
  const val = data[key];

  if (val === undefined || val.length === 0) {
    return null;
  }

  return (
    <section>
      <h2>{bookCase(key)}</h2>
      {val.reduce((acc, ability, ind) => {
        const { name } = ability;
        acc.push(<dt key={`${ind}-${name}`}>{bookCase(name)}</dt>);
        acc.push(<dd key={ind}>{ability.desc}</dd>);
        return acc;
      }, [])}
    </section>
  );
};

export default Ability;
