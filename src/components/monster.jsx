import React from 'react';
import Scores from './scores.jsx';
import DlContainer from './dl-container.jsx';

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
      <article>
        <header>
          <h1>{data.name}</h1>
          <p>{data.size + ' ' + data.type + ', ' + data.alignment}</p>
        </header>
        <dl>
          <dt>{"Armor Class"}</dt>
          <dd>{data.armor_class}</dd>
          <dt>{"Hit points"}</dt>
          <dd>{data.hit_points + ' (' + data.hit_dice + ')'}</dd>
          <dt>{"Speed"}</dt>
          <dd>{data.speed}</dd>
        </dl>
        <Scores scores={data.scores} />
        <dl>
          <dt>{"Saving Throws"}</dt>
          <dd>{data.saving_throws}</dd>
          <dt>{"Skills"}</dt>
          <dd>{data.skills}</dd>
          <dt>{"Damage Vulnerabilities"}</dt>
          <dd>{data.damage_vulnerabilities}</dd>
          <dt>{"Damage Resistances"}</dt>
          <dd>{data.damage_resistances}</dd>
          <dt>{"Damage Immunities"}</dt>
          <dd>{data.damage_immunities}</dd>
          <dt>{"Condition Immunities"}</dt>
          <dd>{data.condition_immunities}</dd>
          <dt>{"Languages"}</dt>
          <dd>{data.languages}</dd>
          <dt>{"Challenge"}</dt>
          <dd>{data.challenge_rating}</dd>
        </dl>
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
