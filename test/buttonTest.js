require('./testdom')('<html><body></body></html>');
import { assert } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Button from '../src/components/button.jsx';

describe('Button component', function () {
  let el;
  let btn;
  let testVar = false;

  function onClick() {
    testVar = true;
  }

  beforeEach(function () {
    el = TestUtils.renderIntoDocument( React.createElement(Button, { event: onClick } , 'Good Button') );
    btn = TestUtils.findRenderedDOMComponentWithTag(el, 'BUTTON');
  });

  it('Should render a button with the default `button` type', function () {
    assert.strictEqual('button', btn.type);
  });

  it('Should execute a supplied function when clicked', function () {
    TestUtils.Simulate.click(btn);
    assert.equal(true, testVar);
  });

});
