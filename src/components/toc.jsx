import React from 'react';
import Button from './button';
import helpers from '../utilities/helpers';
import style from '../style/toc.css';

const Toc = function Toc(props) {
  const { buttonEvent, data } = props;
  const lis = data.map((monster) => {
    if (monster.name) {
      return (
        <li key={monster.arrayIndex}>
          <Button
            className={style.btn}
            event={helpers.partialApply(buttonEvent, monster.arrayIndex)}
          >
            {monster.name}
          </Button>
        </li>
      );
    }
    return false;
  });
  return (
    <ol className={style.ol}>
      {lis}
    </ol>
  );
};

Toc.propTypes = {
  buttonEvent: React.PropTypes.func,
  data: React.PropTypes.arrayOf(
    React.PropTypes.shape({})
  )
};

export default Toc;
