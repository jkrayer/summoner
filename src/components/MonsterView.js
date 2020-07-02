import React from "react";
import Speed from "./Speed";
import Scores from "./Scores";

const MonsterView = (props) => {
  const { data } = props;

  console.log(data);

  return (
    <article>
      <header>
        <h1 id="monster-title">{data.name}</h1>
        <p id="monste-description">
          {[data.size, data.type, ",", data.alignment].join(" ")}
        </p>
      </header>
      <section>
        <dl>
          <dt>{"Armor Class"}</dt>
          <dd>{data.armor_class}</dd>
          <dt>{"Hit points"}</dt>
          <dd>{[data.hit_points, " (", data.hit_dice, ")"].join("")}</dd>
          <Speed data={data.speed} />
        </dl>
      </section>
      <section>
        <Scores scores={data} />
      </section>
    </article>
  );
};

export default MonsterView;
