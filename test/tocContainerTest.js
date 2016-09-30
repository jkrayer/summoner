require('./testdom')('<html><body></body></html>');
import { assert } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TocContainer from '../src/components/toc-container.jsx';
import testData from './testdata';
import filteredTestData from './filteredtestdata';

describe('<TocContainer />', function () {
  let el;
  function buttonEvent () {
    return true;
  }

  beforeEach(function () {
    el = TestUtils.renderIntoDocument( React.createElement(TocContainer, { buttonEvent, data: testData }, null) );
  });

  it('onFilterChange should not accept characters other than A-Z, - and \'', function () {
    el.onFilterChange({target:{ value: '9'}});
    assert.deepEqual(el.state.filteredData, testData);
    el.onFilterChange({target:{ value: '^'}});
    assert.deepEqual(el.state.filteredData, testData);
    el.onFilterChange({target:{ value: '@'}});
    assert.deepEqual(el.state.filteredData, testData);
  });

  it('onFilterChange should return two dragons', function () {
    el.onFilterChange({target:{ value: 'dragon'}});
    setTimeout(function(){
      assert.deepEqual(el.state.filteredData, filteredTestData);
    }, 20);
  });
});
