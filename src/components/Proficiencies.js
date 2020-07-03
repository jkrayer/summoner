import React from "react";
import Stat from "./Stat";

const Proficiencies = (props) => {
  const { data } = props;

  if (data.proficiencies.length === 0) {
    return null;
  }

  const saving_throws = data.proficiencies.reduce((acc, prof) => {
    if (/^Saving/.test(prof.name)) {
      const name = prof.name.replace("Saving Throw: ", "");
      acc.push(`${name} +${prof.value}`);
    }
    return acc;
  }, []);

  const skills = data.proficiencies.reduce((acc, prof) => {
    if (/^Skill/.test(prof.name)) {
      const name = prof.name.replace("Skill: ", "");
      acc.push(`${name} +${prof.value}`);
    }
    return acc;
  }, []);

  return (
    <React.Fragment>
      <Stat data={{ saving_throws }} />
      <Stat data={{ skills }} />
    </React.Fragment>
  );
};

export default Proficiencies;
