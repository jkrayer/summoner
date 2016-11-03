require('./testdom')('<html><body></body></html>');
import { assert } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Input from '../src/components/input.jsx';

describe('<Input />', function () {
  let el;
  let testVar = false;

  function onBlur() {
    testVar = true;
  }

  beforeEach(function () {
    el = TestUtils.renderIntoDocument(
      React.createElement(
        Input,
        { blurEvent: onBlur },
        null
      )
    );
  });

  it('Should execute a supplied blur event', function () {
    el.handleBlur({ target: { value: 1 } });
    assert.equal(true, testVar);
  });

  it('Should update state', function () {
    el.handleChange({ target: { value: 1 } });
    assert.strictEqual(el.state.val, 1);
  });
});
