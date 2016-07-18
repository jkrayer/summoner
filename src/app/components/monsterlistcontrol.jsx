import React from 'react';

export default class MonsterListControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleUse = this.handleUse.bind(this);
  }
  handleShow() {
    const { dispatch, monster, visibleId } = this.props;
    let visibleStatBlock = null;
    let visibleStatBlockId = -1;

    if (monster.id !== visibleId) {
      visibleStatBlock = monster;
      visibleStatBlockId = monster.id;
    }

    dispatch({
      type: 'SHOW_MONSTER',
      visibleStatBlock,
      visibleStatBlockId
    });
  }
  handleUse() {
    const { dispatch, monster } = this.props;

    dispatch({
      type: 'USE_MONSTER',
      monster
    });
  }
  render() {
    const { monster, showControls, visibleStatBlockId } = this.props;
    const classes = (showControls) ? 'button-tray active' : 'button-tray';
    const copy = (monster.id === visibleStatBlockId) ? 'Hide' : 'Show';
    return (
      <div className={classes}>
        <button
          className="button-reset"
          onClick={this.handleShow}
          type="button"
        >{copy}</button>
        <button
          className="button-reset"
          onClick={this.handleUse}
          type="button"
        >{'Use'}</button>
      </div>
    );
  }
}

MonsterListControl.propTypes = {
  dispatch: React.PropTypes.func,
  monster: React.PropTypes.shape({}),
  showControls: React.PropTypes.bool,
  visibleId: React.PropTypes.number,
  visibleStatBlockId: React.PropTypes.number
};
