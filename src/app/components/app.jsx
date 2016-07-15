'use strict';

import React from 'react';
import MonsterList from './monsterlist.jsx';
import MonsterTrack from './monstertrack.jsx';
import MonsterStatBlock from './monsterstatblock.jsx';

const App = React.createClass({
  render () {
    let { monster, visibleStatBlock } = this.props;
    return (
      <div>
        <MonsterList {...this.props} />
        <MonsterTrack {...this.props} />
        <MonsterStatBlock monster={visibleStatBlock} />
      </div>
    );
  }
});

export default App;
