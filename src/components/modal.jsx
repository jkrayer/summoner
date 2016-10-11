import React from 'react';
import ButtonClose from './button-close';
import style from '../style/modal.css';

export default function Modal(props) {
  const { children, closeEvent } = props;
  return (
    <div className={style.overlay}>
      <div className={style.wrapper}>
        <ButtonClose event={closeEvent} />
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: React.PropTypes.element,
  closeEvent: React.PropTypes.func.isRequired
};
