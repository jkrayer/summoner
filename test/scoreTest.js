require('./testdom')('<html><body></body></html>');
import { assert } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Score from '../src/components/score.jsx';

describe('<Score />', function () {
  let strength;
  let dexterity;

  beforeEach(function () {
    strength = Score({ score: 18 });
    dexterity = Score({ score: 8 });
  });

  it('should return a correct modifier', function () {
    assert.match(strength.props.children, /\(\+4\)$/);
    assert.match(dexterity.props.children, /\(\-1\)$/);
  });
});
