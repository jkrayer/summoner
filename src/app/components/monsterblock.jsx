import React from 'react';
import marked from 'marked';

export default class MonsterBlock extends React.Component {
  render() {
    const { className, stats, title } = this.props;
    const header = title ? (<h2>{this.props.title}</h2>) : null;

    if (stats === null) {
      return null;
    }

    return (
      <section className={['monster-block', className].join(' ')}>
        {header}
        {
          stats.map((stat, index) => {
            const markup = marked(stat, { sanitize: false });
            return (
              <div
                dangerouslySetInnerHTML={{ __html: markup }}
                key={index}
              />
            );
          })
        }
      </section>
    );
  }
}

MonsterBlock.propTypes = {
  stats: React.PropTypes.arrayOf(React.PropTypes.string),
  className: React.PropTypes.string,
  title: React.PropTypes.string
};

MonsterBlock.defaultProps = {
  className: '',
  title: null
};
