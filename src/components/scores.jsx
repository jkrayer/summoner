import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Score from './score.jsx'

export default class Scores extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    const { scores } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>{"STR"}</th>
            <th>{"DEX"}</th>
            <th>{"CON"}</th>
            <th>{"INT"}</th>
            <th>{"WIS"}</th>
            <th>{"CHA"}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Score score={scores.strength} /></td>
            <td><Score score={scores.dexterity} /></td>
            <td><Score score={scores.constitution} /></td>
            <td><Score score={scores.intelligence} /></td>
            <td><Score score={scores.wisdom} /></td>
            <td><Score score={scores.charisma} /></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

Scores.propTypes = {
  scores: React.PropTypes.objectOf(React.PropTypes.number).isRequired
};
