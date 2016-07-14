'use strict';

import React from 'react';
import MonsterList from './monsterlist.jsx';
import MonsterStatBlock from './monsterstatblock.jsx';

const App = React.createClass({
  render () {
    return (
      <div>
        <MonsterList {...this.props} />
        <MonsterStatBlock monster={this.props.visibleStatBlock} />
      </div>
    );
  }
});

export default App;
