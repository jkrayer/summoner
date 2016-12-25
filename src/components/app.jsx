import React from 'react';
import { IndexLink, Link } from 'react-router';

export default function App(props) {
  const { children, encounter, location } = props;
  let link = null;

  if (location.pathname !== '/') {
    link = <IndexLink to="/">Home</IndexLink>;
  } else if (encounter.length) {
    link = <Link to="/encounter">Encounter</Link>;
  }

  return (
    <div>
      {link}
      {React.cloneElement(children)}
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
  location: React.PropTypes.shape({
    pathname: React.PropTypes.string.isRequired
  }).isRequired,
  encounter: React.PropTypes.arrayOf(
    React.PropTypes.shape({})
  )
};
