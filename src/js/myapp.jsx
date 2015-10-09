import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Data from '../../../data/monsters';

ReactDOM.render(<App allMonsters={Data} />, document.getElementById('mountpoint'));
