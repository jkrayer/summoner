import React from 'react';
import { render } from 'react-dom';

function Hw () {
  return React.createElement('h1', {}, "Hello World!")
}

render(
  React.createElement(Hw),
  document.getElementById('root')
);
