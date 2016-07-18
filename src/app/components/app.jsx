import React from 'react';
import MonsterList from './monsterlist.jsx';
import MonsterTrack from './monstertrack.jsx';
import MonsterStatBlock from './monsterstatblock.jsx';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    const { visibleStatBlock } = this.props;
    return (
      <div>
        <MonsterList {...this.props} />
        <MonsterTrack {...this.props} />
        <MonsterStatBlock monster={visibleStatBlock} />
      </div>
    );
  }
}

App.propTypes = {
  visibleStatBlock: React.PropTypes.shape({})
};
