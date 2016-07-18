import React from 'react';
import MonsterListItem from './monsterlistitem.jsx';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class MonsterList extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    const { dispatch, monsters, visibleStatBlockId } = this.props;
    return (
      <div id="monster-list">
        <ul className="list-reset">
        {
          monsters.map((monster) =>
            (
            <MonsterListItem
              dispatch={dispatch}
              key={monster.id}
              monster={monster}
              visibleStatBlockId={visibleStatBlockId}
            />
            )
          )
        }
        </ul>
      </div>
    );
  }
}

MonsterList.propTypes = {
  dispatch: React.PropTypes.func,
  monsters: React.PropTypes.arrayOf(React.PropTypes.shape({})),
  visibleStatBlockId: React.PropTypes.number
};
