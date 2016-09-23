import React from 'react';

export default class Dl extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { data } = this.props;

    return (
      <dl>
      </dl>
    );
  }
}

Dl.PropTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object)
};
