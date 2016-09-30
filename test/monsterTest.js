require('./testdom')('<html><body></body></html>');
import { assert } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Monster from '../src/components/monster.jsx';

describe('<Monster />', function () {
  let el;
  const data = {
    "name": "Zombie",
    "size": "Medium",
    "type": "undead",
    "subtype": "",
    "alignment": "neutral evil",
    "armor_class": 8,
    "hit_points": 22,
    "hit_dice": "3d8",
    "speed": "20 ft.",
    "damage_vulnerabilities": "",
    "damage_resistances": "",
    "damage_immunities": "",
    "condition_immunities": "poisoned",
    "senses": "darkvision 60 ft., passive Perception 8",
    "languages": "understands all languages it spoke in life but can't speak",
    "challenge_rating": "1/4 (50 XP)",
    "special_abilities": [
      {
        "name": "Undead Fortitude",
        "desc": "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead.",
        "attack_bonus": 0
      }
    ],
    "actions": [
      {
        "name": "Slam",
        "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage.",
        "attack_bonus": 3,
        "damage_dice": "1d6",
        "damage_bonus": 1
      }
    ],
    "scores": {
      "strength": 13,
      "dexterity": 6,
      "constitution": 16,
      "intelligence": 3,
      "wisdom": 6,
      "charisma": 5
    },
    "saving_throws": "Wisdom 0",
    "skills": "",
    "arrayIndex": 324
  };

  beforeEach(function () {
    el = TestUtils.renderIntoDocument( React.createElement(Monster, { data }, null) );
  });

  it('handleHide() should be set state.show to false', function () {
    el.handleHide();
    assert.isFalse(el.state.show);
  });

});
