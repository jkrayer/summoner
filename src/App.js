import React from 'react';
import { render } from 'react-dom';

function Hw () {
  return React.createElement('h1', {}, "Hello World!")
}

render(
  (<Hw />),
  document.getElementById('root')
);
