import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/app.jsx';

class App extends React.Component {
  render () {
    return (
      <h1>{"JIM"}</h1>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('mountpoint')
);
