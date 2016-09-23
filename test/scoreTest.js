require('./testdom')('<html><body></body></html>');
import { assert } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Score from '../src/components/score.jsx';

describe('<Score />', function () {
  let strength;
  let dexterity;

  beforeEach(function () {
    strength = TestUtils.renderIntoDocument( React.createElement(Score, { score: 18 }, null) );
    dexterity = TestUtils.renderIntoDocument( React.createElement(Score, { score: 8 }, null) );
  });

  it('should return a correct modifier', function () {
    assert.strictEqual(' (+4)', strength.setModifier());
    assert.strictEqual(' (-1)', dexterity.setModifier(8));
  });

});
