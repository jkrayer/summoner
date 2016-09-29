import React from 'react';
import Score from './score';
import style from '../style/table.css';

const Scores = function Scores(props) {
  const { scores } = props;

  return (
    <table className={style['score-table']}>
      <thead>
        <tr>
          <th>{'STR'}</th>
          <th>{'DEX'}</th>
          <th>{'CON'}</th>
          <th>{'INT'}</th>
          <th>{'WIS'}</th>
          <th>{'CHA'}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Score score={scores.strength} /></td>
          <td><Score score={scores.dexterity} /></td>
          <td><Score score={scores.constitution} /></td>
          <td><Score score={scores.intelligence} /></td>
          <td><Score score={scores.wisdom} /></td>
          <td><Score score={scores.charisma} /></td>
        </tr>
      </tbody>
    </table>
  );
};

Scores.propTypes = {
  scores: React.PropTypes.objectOf(React.PropTypes.number).isRequired
};

export default Scores;
