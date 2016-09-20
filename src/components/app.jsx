import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    const lis = data.map( monster => (monster.name ? <li>{monster.name}</li> : null) );
    return (
      <ol>
        {lis}
      </ol>
    );
  }
}

App.propTypes = {
  data: React.PropTypes.arrayOf(
    React.PropTypes.shape({})
  )
};
