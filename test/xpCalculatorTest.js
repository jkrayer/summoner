require('./testdom')('<html><body></body></html>');
import { assert } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import XpCalculator from '../src/components/xp-calculator.jsx';

describe('<XpCalculator />', function () {
  let el;
  const data = [
    { hpPerMonster: [11, 11, 11, 11], xp: 100 },
    { hpPerMonster: [169], xp: 3900 },
    { hpPerMonster: [59, 59], xp: 450 }
  ];

  beforeEach(function () {
    el = TestUtils.renderIntoDocument(
      React.createElement(
        XpCalculator,
        { monsters: data },
        null
      )
    );
  });

  it('Should calculate total XP from provided array', function () {
    assert.strictEqual(5200, el.state.total);
  });

  it('Should calculateXpReward: round(total/split)', function () {
    el.calculateXpReward(3);
    assert.strictEqual('= 1733 per player', el.state.split);
    el.calculateXpReward(6);
    assert.strictEqual('= 867 per player', el.state.split);
  });

});
