'use strict';

let MonsterListItem = React.createClass({
  propTypes: {
    monster: React.PropTypes.object.isRequired
  },
  getInitialState () {
    return {
      show: false
    };
  },
  render() {
    return (
      <li onMouseEnter={this._hoverHandler} onMouseLeave={this._hoverHandler}>
        <div className="control-wrapper">
          <MonsterListControl selected={this.props.monster.selected} show={this.state.show} toggleView={this.props.toggleView} />
          {this.props.monster.name}
        </div>
      </li>
    );
  },
  _hoverHandler () {
    this.setState({
      show: !this.state.show
    });
  }
});
