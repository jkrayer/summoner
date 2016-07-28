require('./testdom')('<html><body></body></html>');
import { assert } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Score from '../src/app/components/score.jsx';

describe('Test Score', function () {
  let el;
  let elTwo;
  let elThree;
  let tag;
  let tagTwo;
  let tagThree;

  beforeEach(function () {
    el = TestUtils.renderIntoDocument( React.createElement(Score, { value: 10 }, null) );
    tag = TestUtils.findRenderedDOMComponentWithTag(el, 'span');
    elTwo = TestUtils.renderIntoDocument( React.createElement(Score, { value: 7 }, null) );
    tagTwo = TestUtils.findRenderedDOMComponentWithTag(elTwo, 'span');
    elThree = TestUtils.renderIntoDocument( React.createElement(Score, { value: 16 }, null) );
    tagThree = TestUtils.findRenderedDOMComponentWithTag(elThree, 'span');
  });

  it('Should be a Composite Component', function () {
    assert.equal(TestUtils.isCompositeComponent(el), true);
  });

  it('Should render a SPAN tag', function () {
    assert.equal(tag.tagName, 'SPAN');
  });

  it('Should render a score with modifier in parenthesis', function () {
    assert.equal(tag.innerHTML, '10 (0)');
  });

  it('Should render a score with a negative modifier with the minus symbol', function () {
    assert.equal(tagTwo.innerHTML, '7 (-2)');
  });

  it('Should render a score with a positive modifier with the plus symbol', function () {
    assert.equal(tagThree.innerHTML, '16 (+3)');
  });
});
