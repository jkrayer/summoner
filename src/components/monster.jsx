import React from 'react';
import Scores form './scores';

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
        <Scores data={data.scores} />
      </article>
    );
  }
};

Monster.PropTypes = {
  data: React.PropTypes.object.isRequired
};
