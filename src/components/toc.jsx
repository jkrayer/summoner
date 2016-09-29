import React from 'react';
import Button from './button';
import style from '../style/button.css';

function partialApply(func, index) {
  return function part() {
    func(index);
  };
}

const Toc = function Toc(props) {
  const { buttonEvent, data } = props;
  const lis = data.map((monster) => {
    if (monster.name) {
      return (
        <li key={monster.arrayIndex}>
          <Button
            className={style['btn-toc']}
            event={partialApply(buttonEvent, monster.arrayIndex)}
          >
            {monster.name}
          </Button>
        </li>
      );
    }
    return false;
  });
  return (
    <ol>
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
