import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

var data = [{
  "id":1,
  "hitpoints":13,
  "name":"Drow",
  "tag":"Medium humanoid (elf), neutral evil",
  "tactical":[
    "Armor Class 15 {chain shirt)",
    "Hit Points 13 (3d8)",
    "Speed 30ft."
  ],
  "scores":{
    "STR":10,
    "DEX":14,
    "CON":10,
    "INT":11,
    "WIS":11,
    "CHA":12
  },
  "skills":[
    "Skills Perception +2, Stealth +4",
    "Senses darkvision 120ft ., pass ive Perception 12",
    "Languages Elvish, Undercommon",
    "Challenge 1/4 (50 XP)"
  ],
  "features":[
    "Fey Ancestry. The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep.",
    "Innate Spellcasting. The drew's spellcasting ability is Charisma (spell save DC 11). It can innately cast the following spells, requiring no material components:<br/>At will: dancing lights<br/>1fday each: darkness,faerie fire",
    "Sunlight Sensitivity. While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
  ],
  "actions":[
    "Shortsword. Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (ld6 + 2) piercing damage.",
    "Hand Crossbow. Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1 d6 + 2) piercing damage, and the target must succeed on a DC 13 Constitutio.n saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake."
  ]
}];

ReactDOM.render(<App allMonsters={data} />, document.getElementById('mountpoint'));
