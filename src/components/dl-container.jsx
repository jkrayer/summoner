import React from 'react';
import Dl from './dl.jsx';

export default class DlContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { data, hl } = this.props;
    let terms = [];

    data.forEach((d) => {
      terms.push(d.name);
      terms.push(d.desc);
    });

    return (
      <Dl data={terms} hl={hl} />
    );
  }
}

DlContainer.PropTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object)
};
