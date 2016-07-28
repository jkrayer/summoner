require('./testdom')('<html><body></body></html>');
import { assert } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import MonsterListItem from '../src/app/components/monsterlistitem.jsx';
import InitialData from '../src/app/data/initial-data.json';

describe('Test Monster List Item', function () {
  let el;
  let tag;

  beforeEach(function () {
    el = TestUtils.renderIntoDocument( React.createElement(MonsterListItem, { monster: InitialData[0] }, null) );
    tag = TestUtils.findRenderedDOMComponentWithTag(el, 'li');
  });

  it('Should be a Composite Component', function () {
    assert.equal(TestUtils.isCompositeComponent(el), true);
  });
  it('Should render a List Item', function () {
    assert.equal(tag.tagName, 'LI');
  });
  it('Should show controls on mouse enter', function () {
    TestUtils.Simulate.mouseEnter(tag);
    assert.equal(el.state.showControls, true);
  });
  it('Should hide controls on mouse leave', function () {
    TestUtils.Simulate.mouseEnter(tag);
    TestUtils.Simulate.mouseLeave(tag);
    assert.equal(el.state.showControls, false);
  });
});
