import React from 'react';
import style from '../style/monster.css'
import Marked from 'marked';

export default class Dl extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let markup;
    let { data, hl } = this.props;
    let terms = data.map((term, index) => {
      let i = index % 2;
      let key = i.toString() + index;
      if (i === 0) {
        return <dt key={key}>{term}</dt>;
      }
      markup = Marked(term, { sanitize: false });
      return <dd dangerouslySetInnerHTML={{ __html: markup }} key={key} />;
    });
    let headline = hl ? <h2 className={style['monster-section']}>{hl}</h2> : null;

    return (
      <div>
        {headline}
        <dl className={style['stat-defs-lg']}>
          { terms }
        </dl>
      </div>
    );
  }
}

Dl.PropTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object),
  hl: React.PropTypes.string
};
