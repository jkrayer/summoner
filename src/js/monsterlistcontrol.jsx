'use strict';

let MonsterListControl = React.createClass({
  proptTypes: {
    selected: React.PropTypes.bool.isRequired,
    viewHandler: React.PropTypes.func.isRequired,
    show: React.PropTypes.bool.isRequired
  },
  getInitialState () {
    return {
      copy: 'Show'
    };
  },
  render () {
    let classes = (this.props.show) ? 'button-tray active' : 'button-tray';
    return (
      <div className={classes}>
        <button type="button" className="button-reset" onClick={this._clickHandler}>{this.state.copy}</button>
      </div>
    );
  },
  _clickHandler () {
    this.props.toggleView();
    this.setState({
      copy: (this.state.copy === 'Show') ? 'Hide' : 'Show'
    });
  }
});
