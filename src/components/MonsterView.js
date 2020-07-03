import React from "react";
import Speed from "./Speed";
import Scores from "./Scores";
import Stat from "./Stat";
import Proficiencies from "./Proficiencies";
import Conditions from "./Conditions";
import Ability from "./Ability";
import Senses from "./Senses";

const MonsterView = (props) => {
  const { data } = props;
  const {
    actions,
    armor_class,
    condition_immunities,
    damage_immunities,
    damage_resistances,
    damage_vulnerabilities,
    hit_dice,
    hit_points,
    proficiencies,
    senses,
    special_abilities,
    legendary_actions,
  } = data;

  console.log(data);

  return (
    <article>
      <header>
        <h1 id="monster-title">{data.name}</h1>
        <p id="monste-description">
          {`${data.size} ${data.type}, ${data.alignment}`}
        </p>
      </header>
      <section>
        <dl>
          <dt>Armor Class</dt>
          <dd>{armor_class}</dd>
          <dt>Hit points</dt>
          <dd>{`${hit_points} (${hit_dice})`}</dd>
          <Speed data={data.speed} />
        </dl>
      </section>
      <section>
        <Scores scores={data} />
      </section>
      <section>
        <dl>
          <Proficiencies data={{ proficiencies }} />
          <Stat data={{ damage_vulnerabilities }} />
          <Stat data={{ damage_resistances }} />
          <Stat data={{ damage_immunities }} />
          <Conditions data={{ condition_immunities }} />
          <Senses data={senses} />
          <dt>{data.languages ? "Languages" : null}</dt>
          <dd>{data.languages ? data.languages : null}</dd>
          <dt>{data.challenge_rating ? "Challenge" : null}</dt>
          <dd>{data.challenge_rating ? data.challenge_rating : null}</dd>
        </dl>
      </section>
      <Ability data={{ special_abilities }} />
      <Ability data={{ actions }} />
      <Ability data={{ legendary_actions }} />
    </article>
  );
};

export default MonsterView;

// -- const specialAbilities = !data.special_abilities ? null : (
//   <DlContainer data={data.special_abilities} />
// );
// -- const actions = !data.actions ? null : (
//   <DlContainer data={data.actions} hl="Actions" />
// );
// const reactions = !data.reactions ? null : (
//   <DlContainer data={data.reactions} hl="Reactions" />
// );
// -- const legendaryActions = !data.legendary_actions ? null : (
//   <DlContainer data={data.legendary_actions} hl="Legendary Actions" />
// );
