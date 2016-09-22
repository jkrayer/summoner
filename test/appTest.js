require('./testdom')('<html><body></body></html>');
import { assert } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import App from '../src/components/app.jsx';

describe('<App />', function () {
  let el;
  const data = [
    { "name": "Aboleth" },
    { "name": "Acolyte" },
    { "name": "Adult Black Dragon" }
  ];

  beforeEach(function () {
    el = TestUtils.renderIntoDocument( React.createElement(App, { data }, null) );
  });

  it('It should have a default state.selectedMonster = null', function () {
    assert.isNull(el.state.selectedMonster);
  });

  it('It should set a new monester when a valid key is given', function () {
    el.setSelectedMonster(2);
    assert.deepEqual(data[2], el.state.selectedMonster);
  });

  it('It should set null if an invalid key is given', function () {
    el.setSelectedMonster(-1);
    assert.isNull(el.state.selectedMonster);
    el.setSelectedMonster(1000);
    assert.isNull(el.state.selectedMonster);
    el.setSelectedMonster('fred');
    assert.isNull(el.state.selectedMonster);
  });

});
