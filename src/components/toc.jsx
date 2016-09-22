import React from 'react';
import Button from './button.jsx';

export default class Toc extends React.Component {
  constructor(props) {
    super(props);
    // state object with selected stat block
  }
  render() {
    const { data } = this.props;
    const lis = data.map( (monster, index) =>
      (monster.name ? <li key={index}><Button>{monster.name}</Button></li> : null)
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
