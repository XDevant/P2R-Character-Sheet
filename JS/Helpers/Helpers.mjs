export default class Helpers {
    abilities = ["str", "dex", "con", "int", "wis", "cha"];
    saves = ["fortitude", "reflex", "will"];
    skills = ["acrobatics", "arcana", "athletics", "crafting", "deception", "diplomacy", "intimidation", "medicine", "nature", 
              "occultism", "performance", "religion", "society", "stealth", "survival", "thievery"];
    armors = ["unarmored", "light", "medium", "heavy"];
    weapons = ["unarmed", "simple", "martial", "advanced"];
    otherProficiencies = ["perception", "classDC", "spellAttack", "spellDC", "favoredWeapon", "weaponSpecialization"]

    breakDictFactory() {
        return {"ancestryBoosts": [],
                "ancestryFlaws": [],
                "backgroundBoosts": [],
                "classBoosts": [],
                1: [],
                5: [],
                10: [],
                15: [],
                20: [],
                "apex": 0
                };
    }

    proficienciesFactory(list) {
        let newItem = {};
        list.forEach(e => {
            newItem[e] = [0];
        });
        return newItem;
    }
}