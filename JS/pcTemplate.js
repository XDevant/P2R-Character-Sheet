let pc = {
    "success": true,
    "base": {
        "name": "Placeholder",
        "class": "",
        "dualClass": null,
        "level": 0,
        "ancestry" : "",
        "heritage" : "",
        "background" : "",
        "alignment" : "TN",
        "gender" : "U",
        "age" : 0,
        "deity": "",
        "size": 2,
        "sizeName": "Medium",
        "keyability": "",
        "languages": ["Common"],
        "rituals": [],
        "resistances": [],
        "inventorMods": [],
        "speed": 25,
    "attributeMods": {
            "str": 0,
            "dex": 0,
            "con": 0,
            "int": 0,
            "wis": 0,
            "cha": 0,
            "breakdown": {
                "ancestryFree": [],
                "ancestryBoosts": [],
                "ancestryFlaws": [],
                "backgroundBoosts": [],
                "classBoosts": [],
                "mapLevelledBoosts": {
                    "1": [],
                    "5": [],
                    "10": [],
                    "15": []
                }
            }
        },
    "hpTotal":{
            "ancestryhp": 0,
            "classhp": 0,
            "bonushp": 0,
            "bonushpPerLevel": 0
        },
    "acTotal": {
            "acProfBonus": 1,
            "acAbilityBonus": 0,
            "acItemBonus": 0,
            "acTotal": 11,
            "shieldBonus": 0
        },
    "proficiencies":{
            "classDC": 2,
            "perception": 2,
            "fortitude": 2,
            "reflex": 2,
            "will": 2,
            "heavy": 0,
            "medium": 0,
            "light": 0,
            "unarmored": 2,
            "advanced": 0,
            "martial": 0,
            "simple": 2,
            "unarmed": 2,
            "casting": 0,
            "acrobatics": 0,
            "arcana": 0,
            "athletics": 0,
            "crafting": 0,
            "deception": 0,
            "diplomacy": 0,
            "intimidation": 0,
            "medicine": 0,
            "nature": 0,
            "occultism": 0,
            "performance": 0,
            "religion": 0,
            "society": 0,
            "stealth": 0,
            "survival": 0,
            "thievery": 0,
            "lores":[{"background": 2}]
        },
    "mods":{},
    "feats":[],
    "specials":[],
    "equipmentContainers":{},
    "equipment":[],
    "weapons":[{"name":"Longbow",
                     "qty":1,
                     "prof":"martial",
                     "die":"d8",
                     "pot":2,
                     "str":"greaterStriking",
                     "mat":null,
                     "display":"+2 Weapon Striking (Greater) Frost Astral Longbow",
                     "runes":["Frost","Astral"],
                     "damageType":"P",
                     "attack":27,
                     "damageBonus":2,
                     "extraDamage":["1d6 Cold","1d6 Spirit"],
                     "increasedDice":false,
                     "isInventor":false
                    },
                    {"name":"Elven Curve Blade",
                     "qty":1,
                     "prof":"martial",
                     "die":"d8",
                     "pot":2,
                     "str":"striking",
                     "mat":"Adamantine (Standard-Grade)",
                     "display":"+2 Weapon Striking Adamantine (Standard-Grade) Elven Curve Blade",
                     "runes":[],
                     "damageType":"S",
                     "attack":7,
                     "damageBonus":0,
                     "extraDamage":[],
                     "increasedDice":false,
                     "isInventor":false}],
         "money":{"cp": 0,"sp": 0,"gp": 0,"pp": 0},
         "armor":[{"name":"Explorer's Clothing",
                   "qty":1,
                   "prof":"unarmored",
                   "pot":2,
                   "res":"greaterResilient",
                   "mat":null,
                   "display":"+2 Armor Resilient (Greater) Invisibility (Greater) Shadow (Greater) Explorer's Clothing",
                   "worn":true,
                   "runes":["Invisibility (Greater)","Shadow (Greater)"]
                  },
                  {"name":"Buckler",
                   "qty":1,
                   "prof":"shield",
                   "pot":0,
                   "res":"",
                   "mat":null,
                   "display":"",
                   "worn":true,
                   "runes":[]
                  }],
        "spellCasters":[{"name":"Cleric",
                          "magicTradition":"divine",
                          "spellcastingType":"prepared",
                          "ability":"wis",
                          "proficiency":6,
                          "focusPoints":0,
                          "innate":false,
                          "perDay":[5,3,3,3,3,3,3,3,3,0,0],
                          "spells":[{"spellLevel":0,"list":["Vitality Lash","Void Warp","Divine Lance","Daze","Forbidding Ward"]},
                                    {"spellLevel":1,"list":["Bless","Infuse Vitality","Sanctuary"]},
                                    {"spellLevel":2,"list":["Spiritual Armament","Revealing Light","Vanishing Tracks"]},
                                    {"spellLevel":3,"list":["Heroism","Protection"]},
                                    {"spellLevel":4,"list":["Silence","Fly","Divine Wrath"]},
                                    {"spellLevel":5,"list":["Divine Immolation","Breath of Life","Darkvision"]},
                                    {"spellLevel":6,"list":["Heroism","Marvelous Mount","Blessed Boundary"]},
                                    {"spellLevel":7,"list":["Resist Energy","Divine Decree","Haste"]},
                                    {"spellLevel":8,"list":["Holy Cascade","Divine Decree","Drop Dead"]}],
                          "prepared":[],
                          "blendedSpells":[]
                          }],
        "focusPoints": 0,
        "focus": {"divine":{"wis":{"abilityBonus":5,"proficiency":6,"itemBonus":0,"focusCantrips":[],"focusSpells":["Ignite Ambition"]}},
                  "arcane":{"cha":{"abilityBonus":0,"proficiency":4,"itemBonus":0,"focusCantrips":[],"focusSpells":["Ancestral Memories"]}}},
        "formula": [],
        "pets": [],
        "familiars":[{"type":"Familiar","name":"Familiar","equipment":[],"specific":null,"abilities":[]}]}}