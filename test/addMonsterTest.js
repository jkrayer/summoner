require('./testdom')('<html><body></body></html>');
import { assert } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import AddMonster from '../src/components/add-monster.jsx';
import testData from './testdata';

describe('<AddMonster />', function () {
  let el;

  beforeEach(function () {
    el = TestUtils.renderIntoDocument( React.createElement(AddMonster, { monster: testData[0], submitEvent: () => {} }, null) );
  });

  // Test setHpRange
  it('setHpRange should return low medium and high hp', function () {
    let hpRange = el.setHpRange();
    assert.strictEqual(hpRange, '54/135/216');
  });

  // Test handleSubmit
  it('handleSubmit should return false if either numMonsters or hpPerMonster is empty', function () {
    const preventDefault = () => true;
    assert.isFalse(el.handleSubmit({
      preventDefault
    }));
     el.handleChange({
       target: {
         id: 'numMonsters',
         val: 3
       }
     })
    assert.isFalse(el.handleSubmit({
      preventDefault
    }));
    el.handleChange({
      target: {
        id: 'numMonsters',
        val: ''
      }
    })
    el.handleChange({
      target: {
        id: 'hpPerMonster',
        val: 54
      }
    })
    assert.isFalse(el.handleSubmit({
      preventDefault
    }));
  });

  // Test handleChange
  it('handleChange should set values for numMonsters & hpPerMonster', function () {
    el.handleChange({
      target: {
        id: 'numMonsters',
        value: 4
      }
    });
    el.handleChange({
      target: {
        id: 'hpPerMonster',
        value: 50
      }
    });
    assert.deepEqual(el.state, {
      hpPerMonster: 50,
      numMonsters: 4
    });
  });
});
