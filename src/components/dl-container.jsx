import React from 'react';
import Dl from './dl';

const DlContainer = function DlContainer(props) {
  const { data, hl } = props;
  const terms = [];

  data.forEach((d) => {
    terms.push(d.name);
    terms.push(d.desc);
  });

  return (
    <Dl data={terms} hl={hl} />
  );
};

DlContainer.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object),
  hl: React.PropTypes.string
};

export default DlContainer;
