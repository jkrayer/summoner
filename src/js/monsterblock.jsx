'use strict';

let MonsterBlock = React.createClass({
  protypes: {
    stats: React.PropTypes.array.isRequired,
    title: React.PropTypes.string
  },
  render () {
    let className = 'monster-block ' + this.props.className;
    let header = this.props.title ? (<h2>{this.props.title}</h2>) : '';
    return (
      <section className={className}>
        {header}
        {this.props.stats.map(function(stat, index) {
          let markup = marked(stat, {sanitize: false});
          return (
            <p key={index} dangerouslySetInnerHTML={{__html: markup}} />
          );
        })}
      </section>
    );
  }
});
