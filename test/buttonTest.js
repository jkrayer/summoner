require('./testdom')('<html><body></body></html>');
import { assert } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Button from '../src/components/button.jsx';

describe('<Button />', function () {
  let el;
  let btn;
  let testVar = false;

  function onClick() {
    testVar = true;
  }

  beforeEach(function () {
    el = Button({ event: onClick, children: 'Good Button' });
  });

  it('Should render a button with the default `button` type', function () {
    assert.strictEqual('button', el.type);
  });

  it('Should execute a supplied function when clicked', function () {
    el.props.onClick();
    assert.equal(true, testVar);
  });

});
