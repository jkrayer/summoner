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
        <input type="text" value={this.state.count} onChange={this.handleChange} disabled={this.state.disabled} />
        <button type="button" onClick={this.handleClick}>{buttonText}</button>
        {hpBlocks}
      </form>
    );
  },
  handleChange (event) {
    this.setState({
      count: parseInt(event.target.value, 10)
    });
  },
  handleClick (event) {
    this.setState({
      disabled: !this.state.disabled
    });
  }
});
