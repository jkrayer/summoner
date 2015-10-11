import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Data from '../../../data/monsters';

import "../css/style";

ReactDOM.render(<App allMonsters={Data} />, document.getElementById('mountpoint'));
