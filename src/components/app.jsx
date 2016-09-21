import React from 'react';
import Toc from './toc.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
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
