import React from 'react';
import marked from 'marked';
import style from '../style/monster.css';

export default function Dl(props) {
  const { data, hl } = props;
  const headline = hl ? <h2 className={style['monster-section']}>{hl}</h2> : null;
  const terms = data.map((term, index) => {
    const i = index % 2;
    const key = i.toString() + index;
    const markup = marked(term, { sanitize: false });
    if (i === 0) {
      return <dt key={key}>{term}</dt>;
    }
    return <dd dangerouslySetInnerHTML={{ __html: markup }} key={key} />;
  });

  return (
    <div>
      {headline}
      <dl className={style['stat-defs-lg']}>
        { terms }
      </dl>
    </div>
  );
}

Dl.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.string),
  hl: React.PropTypes.string
};
