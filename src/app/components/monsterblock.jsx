'use strict';

import React from 'react';
import marked from 'marked';

const MonsterBlock = React.createClass({
  render () {
    let { stats } = this.props;

    if (stats === null) {
      return null;
    }

    let className = 'monster-block ' + this.props.className || '';
    let header = this.props.title ? (<h2>{this.props.title}</h2>) : null;

    return (
      <section className={className}>
        {header}
        {
          stats.map(function(stat, index) {
            let markup = marked(stat, {sanitize: false});
            return (
              <div key={index} dangerouslySetInnerHTML={{__html: markup}} />
            );
          })
        }
      </section>
    );
  }
});

export default MonsterBlock;
