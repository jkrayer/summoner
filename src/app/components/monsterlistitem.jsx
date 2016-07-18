import React from 'react';
import MonsterListControl from './monsterlistcontrol.jsx';

export default class MonsterListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showControls: false };
    this.handleHover = this.handleHover.bind(this);
  }
  handleHover() {
    this.setState({
      showControls: !this.state.showControls
    });
  }
  render() {
    const { monster } = this.props;
    return (
      <li onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        <div className="control-wrapper">
          <MonsterListControl
            {...this.props}
            showControls={this.state.showControls}
          />
          {monster.name}
        </div>
      </li>
    );
  }
}

MonsterListItem.propTypes = {
  monster: React.PropTypes.shape({})
};
