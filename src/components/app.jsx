import React from 'react';
import GlobalHeader from './global-header';

export default function App({children}) {
  return (
    <div>
      <GlobalHeader />
      {React.cloneElement(children)}
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.element.isRequired
};
