import React from 'react';
import fetch from 'cross-fetch';

const Monster = (props) => {
  const { path } = props;
  let lastPath = null;
  let loading = false;
  const [open, setOpen] = React.useState(false);
  const [monster, setMonster] = React.useState({});

  React.useEffect(
    () => {
      if (path !== '' && path !== lastPath) {
        loading = true;
        lastPath = path;

        (async () => {
          const response = await fetch(`https://www.dnd5eapi.co${path}`);
          const result  = await response.json();
          setMonster(result);
          loading = false;
        })();
      }
  }, [path]);

  return (
    <h1>H1: { path }</h1>
  );
};

export default Monster;
