require('./testdom')('<html><body></body></html>');
import { assert } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Toc from '../src/components/toc.jsx';

describe('<TOC />', function () {
  let el;
  let lis;
  const data = {
    buttonEvent: function() {},
    children: null,
    data: [
      { "name": "Aboleth" },
      { "name": "Acolyte" },
      { "name": "Adult Black Dragon" }
    ]
  };

  beforeEach(function () {
    el = TestUtils.renderIntoDocument( React.createElement(Toc, { buttonEvent: data.buttonEvent, data: data.data }, null) );
    lis = TestUtils.scryRenderedDOMComponentsWithTag(el, 'LI');
  });

  it('Should get data as props', function () {
    assert.deepEqual(data, el.props);
  });

  it('Should render one LI element for each', function () {
    assert.strictEqual(3, lis.length);
  });

});
