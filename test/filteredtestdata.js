module.exports = [
  {
    "name": "Adult Black Dragon",
    "size": "Huge",
    "type": "dragon",
    "subtype": "",
    "alignment": "chaotic evil",
    "armor_class": 19,
    "hit_points": 195,
    "hit_dice": "17d12",
    "speed": "40 ft., fly 80 ft., swim 40 ft.",
    "damage_vulnerabilities": "",
    "damage_resistances": "",
    "damage_immunities": "acid",
    "condition_immunities": "",
    "senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21",
    "languages": "Common, Draconic",
    "challenge_rating": "14 (11,500 XP)",
    "special_abilities": [
      {
        "name": "Amphibious",
        "desc": "The dragon can breathe air and water.",
        "attack_bonus": 0
      },
      {
        "name": "Legendary Resistance (3/Day)",
        "desc": "If the dragon fails a saving throw, it can choose to succeed instead.",
        "attack_bonus": 0
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
        "attack_bonus": 0
      },
      {
        "name": "Bite",
        "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) acid damage.",
        "attack_bonus": 11,
        "damage_dice": "2d10 + 1d8",
        "damage_bonus": 6
      },
      {
        "name": "Claw",
        "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
        "attack_bonus": 11,
        "damage_dice": "2d6",
        "damage_bonus": 6
      },
      {
        "name": "Tail",
        "desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
        "attack_bonus": 11,
        "damage_dice": "2d8",
        "damage_bonus": 6
      },
      {
        "name": "Frightful Presence",
        "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
        "attack_bonus": 0
      },
      {
        "name": "Acid Breath (Recharge 5-6)",
        "desc": "The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.",
        "attack_bonus": 0,
        "damage_dice": "12d8"
      }
    ],
    "legendary_actions": [
      {
        "name": "Detect",
        "desc": "The dragon makes a Wisdom (Perception) check.",
        "attack_bonus": 0
      },
      {
        "name": "Tail Attack",
        "desc": "The dragon makes a tail attack.",
        "attack_bonus": 0
      },
      {
        "name": "Wing Attack (Costs 2 Actions)",
        "desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
        "attack_bonus": 0
      }
    ],
    "scores": {
      "strength": 23,
      "dexterity": 14,
      "constitution": 21,
      "intelligence": 14,
      "wisdom": 13,
      "charisma": 17
    },
    "saving_throws": "Dexterity +7 Constitution +10 Wisdom +6 Charisma +8",
    "skills": "Perception +11 Stealth +7",
    "arrayIndex": 2
  },
  {
    "name": "Adult Blue Dragon",
    "size": "Huge",
    "type": "dragon",
    "subtype": "",
    "alignment": "lawful evil",
    "armor_class": 19,
    "hit_points": 225,
    "hit_dice": "18d12",
    "speed": "40 ft., burrow 30 ft., fly 80 ft.",
    "damage_vulnerabilities": "",
    "damage_resistances": "",
    "damage_immunities": "lightning",
    "condition_immunities": "",
    "senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22",
    "languages": "Common, Draconic",
    "challenge_rating": "16 (15,000 XP)",
    "special_abilities": [
      {
        "name": "Legendary Resistance (3/Day)",
        "desc": "If the dragon fails a saving throw, it can choose to succeed instead.",
        "attack_bonus": 0
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
        "attack_bonus": 0
      },
      {
        "name": "Bite",
        "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage plus 5 (1d10) lightning damage.",
        "attack_bonus": 12,
        "damage_dice": "2d10 + 1d10",
        "damage_bonus": 7
      },
      {
        "name": "Claw",
        "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage.",
        "attack_bonus": 12,
        "damage_dice": "2d6",
        "damage_bonus": 7
      },
      {
        "name": "Tail",
        "desc": "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) bludgeoning damage.",
        "attack_bonus": 12,
        "damage_dice": "2d8",
        "damage_bonus": 7
      },
      {
        "name": "Frightful Presence",
        "desc": "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
        "attack_bonus": 0
      },
      {
        "name": "Lightning Breath (Recharge 5-6)",
        "desc": "The dragon exhales lightning in a 90-foot line that is 5 ft. wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.",
        "attack_bonus": 0,
        "damage_dice": "12d10"
      }
    ],
    "legendary_actions": [
      {
        "name": "Detect",
        "desc": "The dragon makes a Wisdom (Perception) check.",
        "attack_bonus": 0
      },
      {
        "name": "Tail Attack",
        "desc": "The dragon makes a tail attack.",
        "attack_bonus": 0
      },
      {
        "name": "Wing Attack (Costs 2 Actions)",
        "desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
        "attack_bonus": 0
      }
    ],
    "scores": {
      "strength": 25,
      "dexterity": 10,
      "constitution": 23,
      "intelligence": 16,
      "wisdom": 15,
      "charisma": 19
    },
    "saving_throws": "Dexterity +5 Constitution +11 Wisdom +7 Charisma +9",
    "skills": "Perception +12 Stealth +5",
    "arrayIndex": 4
  }
];
