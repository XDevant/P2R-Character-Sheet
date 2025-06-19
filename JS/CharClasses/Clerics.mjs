import CharClasses from './CharClasses.mjs';

export default class Clerics extends CharClasses {
    level = 7;
    name = "Cleric"
    hpPerLevel = 8;
    keyattribute = "wis";
    subclassName = "Doctrine";
    spellcasting = true;
    spellcastingType = "prepared";
    spellcastingTradition = "Divine";
    spellcastingAttribute = "wis";
    favoredWeapon = true;
    proficiencies= {
        1: {"classDC": 2, "perception": 2, "fortitude": 2, "reflex": 2, "will": 2, "unarmored": 2, "unarmed": 2, "simple": 2, "religion": 2, "spellAttack": 2, "spellDC": 2}, 
        3: [], 5: [], 7: [], 9: [], 11: [], 13: [], 15: [], 17: [], 19: []};
    features = {1: [{"Doctrine": `${Math.floor(this.level/2)}`}], 3: [], 5: [], 7: [], 9: [], 11: [], 13: [], 15: [], 17: [], 19: []};
    bonusFeats = [];
    bonusSkillTrainings = 2;
    edicts = "";
    anathema = "";

    constructor (dict) {
        super(dict);
    };

}

let clerc = new Clerics({"subclassChoice": "Cloistered Cleric"})
console.log(clerc.increasedSkillRate)
console.log(clerc.features[1][0])