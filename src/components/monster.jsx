import React from 'react';
import Scores from './scores.jsx';
import DlContainer from './dl-container.jsx';
import style from '../style/monster.css';

export default class Monster extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { data } = this.props;
    let specialAbilities;
    let actions;
    let reactions;
    let legendaryActions;

    if (data === null) { return null; }

    specialAbilities = !data.special_abilities ? null : <DlContainer data={data.special_abilities} />;
    actions = !data.actions ? null : <DlContainer data={data.actions} hl="Actions" />;
    reactions = !data.reactions ? null : <DlContainer data={data.reactions} hl="Reactions" />;
    legendaryActions = !data.legendary_actions ? null : <DlContainer data={data.legendary_actions} hl="Legendary Actions" />;

    return(
      <article className={style.monster}>
        <header className={style['lined-section']}>
          <h1 className={style['monster-name']}>{data.name}</h1>
          <p className={style['monster-type']}>{data.size + ' ' + data.type + ', ' + data.alignment}</p>
        </header>
        <div className={style['lined-section']}>
          <dl className={style['stat-defs']}>
            <dt>{"Armor Class"}</dt>
            <dd>{data.armor_class}</dd>
            <dt>{"Hit points"}</dt>
            <dd>{data.hit_points + ' (' + data.hit_dice + ')'}</dd>
            <dt>{"Speed"}</dt>
            <dd>{data.speed}</dd>
          </dl>
        </div>
        <div className={style['lined-section']}>
          <Scores scores={data.scores} />
        </div>
        <div className={style['lined-section']}>
          <dl className={style['stat-defs']}>
            <dt>{data.saving_throws ? "Saving Throws" : null}</dt>
            <dd>{data.saving_throws ? data.saving_throws : null}</dd>
            <dt>{data.skills ? "Skills" : null}</dt>
            <dd>{data.skills ? data.skills : null}</dd>
            <dt>{data.damage_vulnerabilities ? "Damage Vulnerabilities" : null}</dt>
            <dd>{data.damage_vulnerabilities ? data.damage_vulnerabilities : null}</dd>
            <dt>{data.damage_resistances ? "Damage Resistances" : null}</dt>
            <dd>{data.damage_resistances ? data.damage_resistances : null}</dd>
            <dt>{data.damage_immunities ? "Damage Immunities" : null}</dt>
            <dd>{data.damage_immunities ? data.damage_immunities : null}</dd>
            <dt>{data.condition_immunities ? "Condition Immunities" : null}</dt>
            <dd>{data.condition_immunities ? data.condition_immunities : null}</dd>
            <dt>{data.languages ? "Languages" : null}</dt>
            <dd>{data.languages ? data.languages : null}</dd>
            <dt>{data.challenge_rating ? "Challenge" : null}</dt>
            <dd>{data.challenge_rating ? data.challenge_rating : null}</dd>
          </dl>
        </div>
        {specialAbilities}
        {actions}
        {reactions}
        {legendaryActions}
      </article>
    );
  }
};

Monster.PropTypes = {
  data: React.PropTypes.object.isRequired
};
