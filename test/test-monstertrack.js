require('./testdom')('<html><body></body></html>');
import { assert } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import MonsterTrack from '../src/app/components/monstertrack.jsx';
import InitialData from '../src/app/data/initial-data.json';

describe('Monster Track', function () {
  let el;
  let articles;

  beforeEach(function () {
    el = TestUtils.renderIntoDocument( React.createElement(MonsterTrack, { usedMonsters: InitialData }, null) );
    articles = TestUtils.scryRenderedDOMComponentsWithTag(el, 'article');
  });

  it('Should be a Composite Component', function () {
    assert.equal(TestUtils.isCompositeComponent(el), true);
  });

  it('Should render an <article> for each monster provided', function () {
    assert.equal(articles.length, 3);
  });
});
