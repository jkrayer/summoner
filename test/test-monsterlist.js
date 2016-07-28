require('./testdom')('<html><body></body></html>');
import { assert } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import MonsterList from '../src/app/components/monsterlist.jsx';
import InitialData from '../src/app/data/initial-data.json';


describe('Test Monster List Component', function () {
  let el;
  let tag;
  let lis;

  beforeEach(function () {
    el = TestUtils.renderIntoDocument( React.createElement(MonsterList, { monsters: InitialData }, null) );
    tag = TestUtils.findRenderedDOMComponentWithTag(el, 'ul');
    lis = TestUtils.scryRenderedDOMComponentsWithTag(el, 'li');
  });

  it('Should be a Composite Component', function () {
    assert.equal(TestUtils.isCompositeComponent(el), true);
  });
  it('Should render an Unordered List', function () {
    assert.equal(tag.tagName, 'UL');
  });
  it('Should render one list item for each monster', function () {
    assert.equal(lis.length, 3);
  });
});
