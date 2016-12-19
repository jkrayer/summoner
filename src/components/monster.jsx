import React from 'react';
import Scores from './scores';
import DlContainer from './dl-container';
import Button from './button';
import ButtonClose from './button-close';
import style from '../style/monster.css';
import btn from '../style/button.css';

export default function Monster(props) {
  const { data, handleAddWindow, handleClosePane, show } = props;

  if (data === null) {
    return (<article className={[style.monster, style.hide].join(' ')} />);
  }

  const classN = show ? style.monster : [style.monster, style.hide].join(' ');
  const addButton = (handleAddWindow !== null) ? <Button className={btn.btn} event={handleAddWindow}>{'+'}</Button> : null;
  const specialAbilities = !data.special_abilities ? null
    : <DlContainer data={data.special_abilities} />;
  const actions = !data.actions ? null : <DlContainer data={data.actions} hl="Actions" />;
  const reactions = !data.reactions ? null : <DlContainer data={data.reactions} hl="Reactions" />;
  const legendaryActions = !data.legendary_actions ? null
    : <DlContainer data={data.legendary_actions} hl="Legendary Actions" />;
  const optional = !data.optional ? null
    : <DlContainer data={data.optional} hl="Optional Rules" />;

  return (
    <article className={classN}>
      <div className={style['monster-control-bar']}>
        {addButton}
        <ButtonClose event={handleClosePane} />
      </div>
      <header className={style['lined-section']}>
        <h1 className={style['monster-name']}>{data.name}</h1>
        <p className={style['monster-type']}>{[data.size, data.type, ',', data.alignment].join(' ')}</p>
      </header>
      <div className={style['lined-section']}>
        <dl className={style['stat-defs']}>
          <dt>{'Armor Class'}</dt>
          <dd>{data.armor_class}</dd>
          <dt>{'Hit points'}</dt>
          <dd>{[data.hit_points, ' (', data.hit_dice, ')'].join('')}</dd>
          <dt>{'Speed'}</dt>
          <dd>{data.speed}</dd>
        </dl>
      </div>
      <div className={style['lined-section']}>
        <Scores scores={data.scores} />
      </div>
      <div className={style['lined-section']}>
        <dl className={style['stat-defs']}>
          <dt>{data.saving_throws ? 'Saving Throws' : null}</dt>
          <dd>{data.saving_throws ? data.saving_throws : null}</dd>
          <dt>{data.skills ? 'Skills' : null}</dt>
          <dd>{data.skills ? data.skills : null}</dd>
          <dt>{data.damage_vulnerabilities ? 'Damage Vulnerabilities' : null}</dt>
          <dd>{data.damage_vulnerabilities ? data.damage_vulnerabilities : null}</dd>
          <dt>{data.damage_resistances ? 'Damage Resistances' : null}</dt>
          <dd>{data.damage_resistances ? data.damage_resistances : null}</dd>
          <dt>{data.damage_immunities ? 'Damage Immunities' : null}</dt>
          <dd>{data.damage_immunities ? data.damage_immunities : null}</dd>
          <dt>{data.condition_immunities ? 'Condition Immunities' : null}</dt>
          <dd>{data.condition_immunities ? data.condition_immunities : null}</dd>
          <dt>{data.languages ? 'Languages' : null}</dt>
          <dd>{data.languages ? data.languages : null}</dd>
          <dt>{data.challenge_rating ? 'Challenge' : null}</dt>
          <dd>{data.challenge_rating ? data.challenge_rating : null}</dd>
        </dl>
      </div>
      {specialAbilities}
      {actions}
      {reactions}
      {legendaryActions}
      {optional}
    </article>
  );
}

Monster.propTypes = {
  data: React.PropTypes.shape({}),
  handleAddWindow: React.PropTypes.func,
  handleClosePane: React.PropTypes.func,
  show: React.PropTypes.bool.isRequired
};

Monster.defaultProps = {
  data: null,
  show: false
};
