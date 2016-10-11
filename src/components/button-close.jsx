import React from 'react';
import Button from './button';
import style from '../style/button.css';

export default function ButtonClose(props) {
  return (
    <Button
      className={style.btn}
      event={props.event}
    >&times;
    </Button>
  );
}

ButtonClose.propTypes = {
  event: React.PropTypes.func.isRequired
};
