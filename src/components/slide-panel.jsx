/* globals window: true */
import React from 'react';
import Button from './button';
import style from '../style/slide-panel.css';

export default class SlidePanel extends React.Component {
  componentDidUpdate() {
    const { closeEvent, show, timer } = this.props;
    if (timer === -1 || !show) {
      return false;
    }
    return window.setTimeout(closeEvent, timer);
  }
  render() {
    const { children, closeEvent, position, show } = this.props;
    const showTray = show ? style.show : '';
    const trayClass = [style.panel, style[position], showTray].join(' ');
    return (
      <div className={trayClass}>
        <Button
          className={style.btn}
          event={closeEvent}
        >&times;
        </Button>
        {children}
      </div>
    );
  }
}

SlidePanel.propTypes = {
  children: React.PropTypes.element,
  closeEvent: React.PropTypes.func.isRequired,
  position: React.PropTypes.oneOf(['top']),
  show: React.PropTypes.bool,
  timer: React.PropTypes.number
};

SlidePanel.defaultProps = {
  position: 'top',
  show: false,
  timer: -1
};
