require('./testdom')('<html><body></body></html>');
import { assert } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import App from '../src/components/app.jsx';
import testData from './testdata';

describe('<App />', function () {
  let el;

  beforeEach(function () {
    el = TestUtils.renderIntoDocument( React.createElement(App, { data: testData }, null) );
  });

  it('It should have a default state.selectedMonster = null', function () {
    assert.isNull(el.state.selectedMonster);
  });

//  it('It should set a new monester when a valid key is given', function () {
//    el.setSelectedMonster(2);
//    assert.deepEqual(data[2], el.state.selectedMonster);
//  });

  it('It should set null if an invalid key is given', function () {
    el.setSelectedMonster(-1);
    assert.isNull(el.state.selectedMonster);
    el.setSelectedMonster(1000);
    assert.isNull(el.state.selectedMonster);
    el.setSelectedMonster('fred');
    assert.isNull(el.state.selectedMonster);
  });

  it('It should toggle the boolean state.showAddWindow', function () {
    el.setSelectedMonster(0);
    el.toggleAddWindow();
    assert.strictEqual(el.state.showAddWindow, true);
    el.toggleAddWindow();
    assert.strictEqual(el.state.showAddWindow, false);
  });

  it('It should add a monster object', function () {
    const monster = {
      arrayIndex: 7,
      hpPerMonster: 39,
      numMonsters: 2
    };
    el.setSelectedMonster(0);
    el.addMonster(monster);
    assert.deepEqual(el.state.monsters[0], monster);
  });

});
