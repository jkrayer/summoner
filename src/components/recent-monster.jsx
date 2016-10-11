import React from 'react';

export default function RecentMonster(props) {
  if (props.monsters.length === 0) {
    return null;
  }
  const name = props.monsters[props.monsters.length - 1].name;
  return (
    <p>{['Added:', name].join(' ')}</p>
  );
}

RecentMonster.propTypes = {
  monsters: React.PropTypes.arrayOf(React.PropTypes.object)
};
