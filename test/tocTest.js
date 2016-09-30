require('./testdom')('<html><body></body></html>');
import { assert } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Toc from '../src/components/toc.jsx';

describe('<TOC />', function () {
  let el;
  let lis;
  const data = [
    { "name": "Aboleth" },
    { "name": "Acolyte" },
    { "name": "Adult Black Dragon" }
  ];

  beforeEach(function () {
    el = Toc({ buttonEvent: data.buttonEvent, data: data.data });
  });

  it('Should render one LI element for each', function () {
    assert.strictEqual(3, el.props.children.length);
  });

});
