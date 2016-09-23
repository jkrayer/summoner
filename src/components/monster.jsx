import React from 'react';
import Scores from './scores.jsx';

export default class Monster extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { data } = this.props;

    if (data === null) { return null; }

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
      </article>
    );
  }
};

Monster.PropTypes = {
  data: React.PropTypes.object.isRequired
};
