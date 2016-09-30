export default [
  {
    "name": "Aboleth",
    "size": "Large",
    "type": "aberration",
    "subtype": "",
    "alignment": "lawful evil",
    "armor_class": 17,
    "hit_points": 135,
    "hit_dice": "18d10",
    "speed": "10 ft., swim 40 ft.",
    "damage_vulnerabilities": "",
    "damage_resistances": "",
    "damage_immunities": "",
    "condition_immunities": "",
    "senses": "darkvision 120 ft., passive Perception 20",
    "languages": "Deep Speech, telepathy 120 ft.",
    "challenge_rating": "10 (5,900 XP)",
    "special_abilities": [
      {
        "name": "Amphibious",
        "desc": "The aboleth can breathe air and water.",
        "attack_bonus": 0
      },
      {
        "name": "Mucous Cloud",
        "desc": "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 ft. of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater.",
        "attack_bonus": 0
      },
      {
        "name": "Probing Telepathy",
        "desc": "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature.",
        "attack_bonus": 0
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The aboleth makes three tentacle attacks.",
        "attack_bonus": 0
      },
      {
        "name": "Tentacle",
        "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.",
        "attack_bonus": 9,
        "damage_dice": "2d6",
        "damage_bonus": 5
      },
      {
        "name": "Tail",
        "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft. one target. Hit: 15 (3d6 + 5) bludgeoning damage.",
        "attack_bonus": 9,
        "damage_dice": "3d6",
        "damage_bonus": 5
      },
      {
        "name": "Enslave (3/day)",
        "desc": "The aboleth targets one creature it can see within 30 ft. of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.\nWhenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.",
        "attack_bonus": 0
      }
    ],
    "legendary_actions": [
      {
        "name": "Detect",
        "desc": "The aboleth makes a Wisdom (Perception) check.",
        "attack_bonus": 0
      },
      {
        "name": "Tail Swipe",
        "desc": "The aboleth makes one tail attack.",
        "attack_bonus": 0
      },
      {
        "name": "Psychic Drain (Costs 2 Actions)",
        "desc": "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.",
        "attack_bonus": 0
      }
    ],
    "scores": {
      "strength": 21,
      "dexterity": 9,
      "constitution": 15,
      "intelligence": 18,
      "wisdom": 15,
      "charisma": 18
    },
    "saving_throws": "Constitution +6 Intelligence +8 Wisdom +6",
    "skills": "History +12 Perception +10",
    "arrayIndex": 0
  },
  {
    "name": "Acolyte",
    "size": "Medium",
    "type": "humanoid",
    "subtype": "any race",
    "alignment": "any alignment",
    "armor_class": 10,
    "hit_points": 9,
    "hit_dice": "2d8",
    "speed": "30 ft.",
    "damage_vulnerabilities": "",
    "damage_resistances": "",
    "damage_immunities": "",
    "condition_immunities": "",
    "senses": "passive Perception 12",
    "languages": "any one language (usually Common)",
    "challenge_rating": "1/4 (50 XP)",
    "special_abilities": [
      {
        "name": "Spellcasting",
        "desc": "The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The acolyte has following cleric spells prepared:\n\n• Cantrips (at will): light, sacred flame, thaumaturgy\n• 1st level (3 slots): bless, cure wounds, sanctuary",
        "attack_bonus": 0
      }
    ],
    "actions": [
      {
        "name": "Club",
        "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.",
        "attack_bonus": 2,
        "damage_dice": "1d4"
      }
    ],
    "scores": {
      "strength": 10,
      "dexterity": 10,
      "constitution": 10,
      "intelligence": 10,
      "wisdom": 14,
      "charisma": 11
    },
    "saving_throws": "",
    "skills": "Medicine +4 Religion +2",
    "arrayIndex": 1
  },
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
    "name": "Adult Blue Dracolich",
    "size": "Huge",
    "type": "undead",
    "subtype": "",
    "alignment": "lawful evil",
    "armor_class": 19,
    "hit_points": 225,
    "hit_dice": "18d12",
    "speed": "40 ft., burrow 30 ft., fly 80 ft.",
    "damage_vulnerabilities": "",
    "damage_resistances": "necrotic",
    "damage_immunities": "lightning, poison",
    "condition_immunities": "charmed, exhaustion, frightened, paralyzed, poisoned",
    "senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22",
    "languages": "Common, Draconic",
    "challenge_rating": "17 (18,000 XP)",
    "special_abilities": [
      {
        "name": "Legendary Resistance (3/Day)",
        "desc": "If the dracolich fails a saving throw, it can choose to succeed instead.",
        "attack_bonus": 0
      },
      {
        "name": "Magic Resistance",
        "desc": "The dracolich has advantage on saving throws against spells and other magical effects.",
        "attack_bonus": 0
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dracolich can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
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
        "desc": "Each creature of the dracolich's choice that is within 120 feet of the dracolich and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dracolich's Frightful Presence for the next 24 hours.",
        "attack_bonus": 0
      },
      {
        "name": "Lightning Breath (Recharge 5-6)",
        "desc": "The dracolich exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 20 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.",
        "attack_bonus": 0,
        "damage_dice": "12d10"
      }
    ],
    "legendary_actions": [
      {
        "name": "Detect",
        "desc": "The dracolich makes a Wisdom (Perception) check.",
        "attack_bonus": 0
      },
      {
        "name": "Tail Attack",
        "desc": "The dracolich makes a tail attack.",
        "attack_bonus": 0
      },
      {
        "name": "Wing Attack (Costs 2 Actions)",
        "desc": "The dracolich beats its tattered wings. Each creature within 10 ft. of the dracolich must succeed on a DC 21 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. After beating its wings this way, the dracolich can fly up to half its flying speed.",
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
    "saving_throws": "",
    "skills": "Perception +12",
    "arrayIndex": 3
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
  },
  {
    "name": "Balor",
    "size": "Huge",
    "type": "fiend",
    "subtype": "demon",
    "alignment": "chaotic evil",
    "armor_class": 19,
    "hit_points": 262,
    "hit_dice": "21d12",
    "speed": "40 ft., fly 80 ft.",
    "damage_vulnerabilities": "",
    "damage_resistances": "cold, lightning; bludgeoning, piercing, and slashing from nonmagical weapons",
    "damage_immunities": "fire, poison",
    "condition_immunities": "poisoned",
    "senses": "truesight 120 ft., passive Perception 13",
    "languages": "Abyssal, telepathy 120 ft.",
    "challenge_rating": "19 (22,000 XP)",
    "special_abilities": [
      {
        "name": "Death Throes",
        "desc": "When the balor dies, it explodes, and each creature within 30 feet of it must make a DC 20 Dexterity saving throw, taking 70 (20d6) fire damage on a failed save, or half as much damage on a successful one. The explosion ignites flammable objects in that area that aren't being worn or carried, and it destroys the balor's weapons.",
        "attack_bonus": 0,
        "damage_dice": "20d6"
      },
      {
        "name": "Fire Aura",
        "desc": "At the start of each of the balor's turns, each creature within 5 feet of it takes 10 (3d6) fire damage, and flammable objects in the aura that aren't being worn or carried ignite. A creature that touches the balor or hits it with a melee attack while within 5 feet of it takes 10 (3d6) fire damage.",
        "attack_bonus": 0,
        "damage_dice": "3d6"
      },
      {
        "name": "Magic Resistance",
        "desc": "The balor has advantage on saving throws against spells and other magical effects.",
        "attack_bonus": 0
      },
      {
        "name": "Magic Weapons",
        "desc": "The balor's weapon attacks are magical.",
        "attack_bonus": 0
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The balor makes two attacks: one with its longsword and one with its whip.",
        "attack_bonus": 0
      },
      {
        "name": "Longsword",
        "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 21 (3d8 + 8) slashing damage plus 13 (3d8) lightning damage. If the balor scores a critical hit, it rolls damage dice three times, instead of twice.",
        "attack_bonus": 14,
        "damage_dice": "3d8 + 3d8",
        "damage_bonus": 8
      },
      {
        "name": "Whip",
        "desc": "Melee Weapon Attack: +14 to hit, reach 30 ft., one target. Hit: 15 (2d6 + 8) slashing damage plus 10 (3d6) fire damage, and the target must succeed on a DC 20 Strength saving throw or be pulled up to 25 feet toward the balor.",
        "attack_bonus": 14,
        "damage_dice": "2d6 + 3d6",
        "damage_bonus": 8
      },
      {
        "name": "Teleport",
        "desc": "The balor magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.",
        "attack_bonus": 0
      },
      {
        "name": "Variant: Summon Demon (1/Day)",
        "desc": "The demon chooses what to summon and attempts a magical summoning.\nA balor has a 50 percent chance of summoning 1d8 vrocks, 1d6 hezrous, 1d4 glabrezus, 1d3 nalfeshnees, 1d2 mariliths, or one goristro.\nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
        "attack_bonus": 0
      }
    ],
    "scores": {
      "strength": 26,
      "dexterity": 15,
      "constitution": 22,
      "intelligence": 20,
      "wisdom": 16,
      "charisma": 22
    },
    "saving_throws": "Strength +14 Constitution +12 Wisdom +9 Charisma +12",
    "skills": "",
    "arrayIndex": 36
  },
  {
    "name": "Bandit",
    "size": "Medium",
    "type": "humanoid",
    "subtype": "any race",
    "alignment": "any non-lawful alignment",
    "armor_class": 12,
    "hit_points": 11,
    "hit_dice": "2d8",
    "speed": "30 ft.",
    "damage_vulnerabilities": "",
    "damage_resistances": "",
    "damage_immunities": "",
    "condition_immunities": "",
    "senses": "passive Perception 10",
    "languages": "any one language (usually Common)",
    "challenge_rating": "1/8 (25 XP)",
    "actions": [
      {
        "name": "Scimitar",
        "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage.",
        "attack_bonus": 3,
        "damage_dice": "1d6",
        "damage_bonus": 1
      },
      {
        "name": "Light Crossbow",
        "desc": "Ranged Weapon Attack: +3 to hit, range 80 ft./320 ft., one target. Hit: 5 (1d8 + 1) piercing damage.",
        "attack_bonus": 3,
        "damage_dice": "1d8",
        "damage_bonus": 1
      }
    ],
    "scores": {
      "strength": 11,
      "dexterity": 12,
      "constitution": 12,
      "intelligence": 10,
      "wisdom": 10,
      "charisma": 10
    },
    "saving_throws": "",
    "skills": "",
    "arrayIndex": 37
  },
  {
    "name": "Bandit Captain",
    "size": "Medium",
    "type": "humanoid",
    "subtype": "any race",
    "alignment": "any non-lawful alignment",
    "armor_class": 15,
    "hit_points": 65,
    "hit_dice": "10d8",
    "speed": "30 ft.",
    "damage_vulnerabilities": "",
    "damage_resistances": "",
    "damage_immunities": "",
    "condition_immunities": "",
    "senses": "passive Perception 10",
    "languages": "any two languages",
    "challenge_rating": "2 (450 XP)",
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The captain makes three melee attacks: two with its scimitar and one with its dagger. Or the captain makes two ranged attacks with its daggers.",
        "attack_bonus": 0
      },
      {
        "name": "Scimitar",
        "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.",
        "attack_bonus": 5,
        "damage_dice": "1d6",
        "damage_bonus": 3
      },
      {
        "name": "Dagger",
        "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d4 + 3) piercing damage.",
        "attack_bonus": 5,
        "damage_dice": "1d4",
        "damage_bonus": 3
      }
    ],
    "reactions": [
      {
        "name": "Parry",
        "desc": "The captain adds 2 to its AC against one melee attack that would hit it. To do so, the captain must see the attacker and be wielding a melee weapon.",
        "attack_bonus": 0
      }
    ],
    "scores": {
      "strength": 15,
      "dexterity": 16,
      "constitution": 14,
      "intelligence": 14,
      "wisdom": 11,
      "charisma": 14
    },
    "saving_throws": "Strength +4 Dexterity +5 Wisdom +2",
    "skills": "Athletics +4 Deception +4",
    "arrayIndex": 38
  },
  {
    "name": "Barbed Devil",
    "size": "Medium",
    "type": "fiend",
    "subtype": "devil",
    "alignment": "lawful evil",
    "armor_class": 15,
    "hit_points": 110,
    "hit_dice": "13d8",
    "speed": "30 ft.",
    "damage_vulnerabilities": "",
    "damage_resistances": "cold; bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
    "damage_immunities": "fire, poison",
    "condition_immunities": "poisoned",
    "senses": "darkvision 120 ft., passive Perception 18",
    "languages": "Infernal, telepathy 120 ft.",
    "challenge_rating": "5 (1,800 XP)",
    "special_abilities": [
      {
        "name": "Barbed Hide",
        "desc": "At the start of each of its turns, the barbed devil deals 5 (1d10) piercing damage to any creature grappling it.",
        "attack_bonus": 0,
        "damage_dice": "1d10"
      },
      {
        "name": "Devil's Sight",
        "desc": "Magical darkness doesn't impede the devil's darkvision.",
        "attack_bonus": 0
      },
      {
        "name": "Magic Resistance",
        "desc": "The devil has advantage on saving throws against spells and other magical effects.",
        "attack_bonus": 0
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The devil makes three melee attacks: one with its tail and two with its claws. Alternatively, it can use Hurl Flame twice.",
        "attack_bonus": 0
      },
      {
        "name": "Claw",
        "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft ., one target. Hit: 6 (1d6 + 3) piercing damage.",
        "attack_bonus": 6,
        "damage_dice": "1d6",
        "damage_bonus": 3
      },
      {
        "name": "Tail",
        "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage.",
        "attack_bonus": 6,
        "damage_dice": "2d6",
        "damage_bonus": 3
      },
      {
        "name": "Hurl Flame",
        "desc": "Ranged Spell Attack: +5 to hit, range 150 ft., one target. Hit: 10 (3d6) fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire.",
        "attack_bonus": 5,
        "damage_dice": "3d6"
      }
    ],
    "scores": {
      "strength": 16,
      "dexterity": 17,
      "constitution": 18,
      "intelligence": 12,
      "wisdom": 14,
      "charisma": 14
    },
    "saving_throws": "Strength +6 Constitution +7 Wisdom +5 Charisma +5",
    "skills": "Deception +5 Insight +5 Perception +8",
    "arrayIndex": 39
  },
  {
    "name": "Basilisk",
    "size": "Medium",
    "type": "monstrosity",
    "subtype": "",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 52,
    "hit_dice": "8d8",
    "speed": "20 ft.",
    "damage_vulnerabilities": "",
    "damage_resistances": "",
    "damage_immunities": "",
    "condition_immunities": "",
    "senses": "darkvision 60 ft., passive Perception 9",
    "languages": "",
    "challenge_rating": "3 (700 XP)",
    "special_abilities": [
      {
        "name": "Petrifying Gaze",
        "desc": "If a creature starts its turn within 30 ft. of the basilisk and the two of them can see each other, the basilisk can force the creature to make a DC 12 Constitution saving throw if the basilisk isn't incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.\nA creature that isn't surprised can avert its eyes to avoid the saving throw at the start of its turn. If it does so, it can't see the basilisk until the start of its next turn, when it can avert its eyes again. If it looks at the basilisk in the meantime, it must immediately make the save.\nIf the basilisk sees its reflection within 30 ft. of it in bright light, it mistakes itself for a rival and targets itself with its gaze.",
        "attack_bonus": 0
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage plus 7 (2d6) poison damage.",
        "attack_bonus": 5,
        "damage_dice": "2d6 + 2d6",
        "damage_bonus": 3
      }
    ],
    "scores": {
      "strength": 16,
      "dexterity": 8,
      "constitution": 15,
      "intelligence": 2,
      "wisdom": 8,
      "charisma": 7
    },
    "saving_throws": "",
    "skills": "",
    "arrayIndex": 40
  }
];
