'use strict';

let MonsterControl = React.createClass({
  proptypes: {
    monster: React.PropTypes.object.isRequired
  },
  getInitialState () {
    return {
      count: null,
      disabled: false
    };
  },
  render () {
    let buttonText = this.state.disabled ? 'Un-Set' : 'Set';
    let self = this;
    let n = [];
    let hpBlocks;

    if (this.state.count) {
      for (let i = 0; i < this.state.count; i++) {
        n.push(i);
      }
      hpBlocks = n.map(function (num, index) {
        return (<HPBlock hitpoints={self.props.monster.hitpoints} key={index}/>);
      });
    }

    return (
      <form>
        <input type="text" value={this.state.count} onChange={this._handleChange} disabled={this.state.disabled} />
        <button type="button" onClick={this._handleClick}>{buttonText}</button>
        {hpBlocks}
      </form>
    );
  },
  _handleChange (event) {
    this.setState({
      count: parseInt(event.target.value, 10)
    });
  },
  _handleClick (event) {
    this.setState({
      disabled: !this.state.disabled
    });
  }
});
