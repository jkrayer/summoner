import React from 'react';
import Toc from './toc.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedMonster: null };
    this.setSelectedMonster = this.setSelectedMonster.bind(this);
  }
  setSelectedMonster(key) {
    this.setState({
      selectedMonster: this.props.data[key] || null
    });
  }
  render() {
    const { data } = this.props;
    return (
      <div>
        <Toc data={data} />
      </div>
    );
  }
}

App.propTypes = {
  data: React.PropTypes.arrayOf(
    React.PropTypes.shape({})
  )
};
