require('./testdom')('<html><body></body></html>');
import { assert } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import App from '../src/components/app.jsx';
import testData from './testdata';

describe('<App />', function () {
  let el;
  const monster = {
    arrayIndex: 7,
    hpPerMonster: [39, 39, 39, 39],
    name: 'Orc',
    xp: 100
  };


  beforeEach(function () {
    el = TestUtils.renderIntoDocument(
      React.createElement(
        App,
        { data: testData, location: { pathname: '/testPane' } },
        React.createElement('div', {}, null)
      )
    );
  });

  // Test setSelectedMonster
  it('setSelectedMonster should set null if an invalid key is given', function () {
    el.setSelectedMonster(-1);
    assert.isNull(el.state.selectedMonster);
    el.setSelectedMonster(1000);
    assert.isNull(el.state.selectedMonster);
    el.setSelectedMonster('fred');
    assert.isNull(el.state.selectedMonster);
  });

  // Test toggleAny
  it('It should toggle the supplied boolean', function () {
    el.setSelectedMonster(0);
    el.toggleAny('showAddWindow');
    assert.strictEqual(el.state.showAddWindow, true);
    el.toggleAny('showAddWindow');
    assert.strictEqual(el.state.showAddWindow, false);
  });

  // Test addMonster
  it('It should add a monster object', function () {
    el.setSelectedMonster(0);
    el.addMonster(monster);
    assert.deepEqual(el.state.monsters[0], monster);
  });

  // Test calculateHp
  it('It should return false when if newVal is NaN', function () {
    assert.isFalse(el.calculateHp(0, 1, 'a'));
  });

  it('It should subtract from the second hp block', function () {
    el.addMonster(monster);
    el.calculateHp(0, 1, 7);
    assert.strictEqual(el.state.monsters[0].hpPerMonster[1], 32);
  });

  // Test deleteMonster
  it('It should delete a monster', function () {
    el.addMonster(monster);
    el.deleteMonster(monster);
    assert.deepEqual(el.state.monsters, []);
  });
});
