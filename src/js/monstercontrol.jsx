var MonsterControl = React.createClass({
  proptypes: {
    monster: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      count: null,
      disabled: false
    };
  },
  render: function () {
    var buttonText = this.state.disabled ? 'Un-Set' : 'Set';
    var self = this;
    var n = [];
    var hpBlocks;

    if (this.state.count) {
      for (var i = 0; i < this.state.count; i++) {
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
  handleChange: function(event) {
    this.setState({
      count: parseInt(event.target.value, 10)
    });
  },
  handleClick: function (event) {
    this.setState({
      disabled: !this.state.disabled
    });
  }
});

var HPBlock = React.createClass({
  proptypes: {
    hitpoints: React.PropTypes.number.isRequired
  },
  getInitialState: function () {
    return {
      hitpoints: this.props.hitpoints
    };
  },
  render: function () {
    return (
      <div>
        <span>{this.state.hitpoints}</span>
        <input type="text" ref="pointcounter" />
        <button type="button" onClick={this.handlePlus}>+</button>
        <button type="button" onClick={this.handleMinus}>-</button>
      </div>
    );
  },
  handleMinus: function (event) {
    var value = parseInt(React.findDOMNode(this.refs.pointcounter).value, 10);
    var newValue = this.state.hitpoints - value;
    this.setState({
      hitpoints: newValue
    });
  },
  handlePlus: function (event) {
    var value = parseInt(React.findDOMNode(this.refs.pointcounter).value, 10);
    var newValue = this.state.hitpoints + value;
    this.setState({
      hitpoints: newValue
    });
  }
});
