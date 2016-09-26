import React from 'react';
import Button from './button.jsx';
import style from '../style/button.css';

export default class Toc extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    const lis = data.map( (monster, index) =>
      !monster.name ? null :
        <li key={index}>
          <Button event={this.props.buttonEvent.bind(null, index)}>
            {monster.name}
          </Button>
        </li>
    );
    return (
      <ol>
        {lis}
      </ol>
    );
  }
}

Toc.propTypes = {
  buttonEvent: React.PropTypes.func,
  data: React.PropTypes.arrayOf(
    React.PropTypes.shape({})
  )
};
