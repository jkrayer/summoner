'use strict';

import React from 'react';
import MonsterList from './monsterlist.jsx';

const App = React.createClass({
  render () {
    return (
      <MonsterList {...this.props} />
    );
  }
});

export default App;
