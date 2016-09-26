import React from 'react';

export default class Dl extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { data, hl } = this.props;
    let terms = data.map((term, index) => {
      let i = index % 2;
      let key = i.toString() + index;
      if (i === 0) {
        return <dt key={key}>{term}</dt>;
      }
      return <dd key={key}>{term}</dd>;
    });
    let headline = hl ? <h2>{hl}</h2> : null;

    return (
      <div>
        {headline}
        <dl>
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
