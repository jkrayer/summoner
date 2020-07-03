import React from "react";

// String -> String
const bookCase = (string) => {
  return string.replace(/^[a-z]|_[a-z]/g, (a) =>
    a.toUpperCase().replace("_", " ")
  );
};

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
