module.exports = {
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
};
