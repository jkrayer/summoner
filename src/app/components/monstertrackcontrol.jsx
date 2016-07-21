import React from 'react';

export default class MonsterTrackControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleShow() {
    const { dispatch, monster, visibleStatBlockId } = this.props;
    let visibleStatBlock = null;
    let nextVisibleStatBlockId = -1;

    if (monster.id !== visibleStatBlockId) {
      visibleStatBlock = monster;
      nextVisibleStatBlockId = monster.id;
    }

    dispatch({
      type: 'SHOW_MONSTER',
      visibleStatBlock,
      visibleStatBlockId: nextVisibleStatBlockId
    });
  }
  handleRemove() {
    const { dispatch, monster } = this.props;

    dispatch({
      type: 'REMOVE_MONSTER',
      monster
    });
    dispatch({
      type: 'SHOW_MONSTER',
      visibleStatBlock: null,
      visibleStatBlockId: -1
    });
  }
  render() {
    const { monster, visibleStatBlockId } = this.props;
    let viewIcon = (monster.id === visibleStatBlockId) ? 'fa fa-eye-slash' : 'fa fa-eye';

    return (
      <div className="monster-track-control">
        <button
          className="button-reset"
          onClick={this.handleShow}
          type="button"
        ><i className={viewIcon}></i></button>
        <button
          className="button-reset"
          onClick={this.handleRemove}
          type="button"
        ><i className="fa fa-close"></i></button>
      </div>
    );
  }
}

MonsterTrackControl.propTypes = {
  dispatch: React.PropTypes.func,
  monster: React.PropTypes.shape({}),
  visibleStatBlockId: React.PropTypes.number
};
