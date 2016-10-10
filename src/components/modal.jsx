import React from 'react';
import Button from './button';
import style from '../style/modal.css';

export default function Modal(props) {
  const {children, closeEvent} = props;
  return(
    <div className={style.overlay}>
      <div className={style.wrapper}>
        <Button
          className={style.btn}
          event={closeEvent}
        >&times;
      </Button>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  // children: React.PropTypes.obj,
  closeEvent: React.PropTypes.func.isRequired
};
