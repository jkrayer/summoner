require('./testdom')('<html><body></body></html>');
import { assert } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TocContainer from '../src/components/toc-container.jsx';
import testData from './testdata';
import filteredTestData from './filteredtestdata';
import demonData from './demonData';

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

  it('onFilterByChange should set state.filterBy to an approved value', function () {
    el.onFilterByChange({target:{ value: 'challenge_rating'}});
    assert.include(el.validFilters, el.state.filterBy);
    el.onFilterByChange({target:{ value: 'dragon'}});
    assert.strictEqual(el.state.filterBy, 'name');
  });

  it('filter by `challenge_rating` should return 1 result', function () {
    el.onFilterChange({target:{ value: '14'}});
    setTimeout(function(){
      assert.deepEqual(el.state.filteredData, filteredTestData[0]);
    }, 20);
  });

  it('filter by `type` should return 1 result', function () {
    el.onFilterByChange({target:{ value: 'type'}});
    el.onFilterChange({target:{ value: 'fiend'}});
    setTimeout(function(){
      assert.deepEqual(el.state.filteredData, demonData);
    }, 20);
  });

  it('filter by `subtype` should return 1 result', function () {
    el.onFilterByChange({target:{ value: 'subtype'}});
    el.onFilterChange({target:{ value: 'demon'}});
    setTimeout(function(){
      assert.deepEqual(el.state.filteredData, demonData);
    }, 20);
  });
});
