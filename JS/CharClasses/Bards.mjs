import CharClasses from './CharClasses.mjs';

export default class Bards extends CharClasses {
    level = 1;
    name = "Bard";
    hpPerLevel = 8;
    keyattribute = "";
    subclassName = "";
    subclassChoice = "";
    spellcasting = false;
    spellcastingType = "";
    spellcastingTradition = "";
    spellcastingAttribute = "";
    increasedSkillRate = false;
    favoredWeapon = "";
    proficiencies = {
        1: {"classDC": 2, "perception": 2, "fortitude": 2, "reflex": 2, "will": 2, "unarmored": 2, "unarmed": 2}, 
        3: [], 5: [], 7: [], 9: [], 11: [], 13: [], 15: [], 17: [], 19: []};
    features = {1: [], 3: [], 5: [], 7: [], 9: [], 11: [], 13: [], 15: [], 17: [], 19: []};
    bonusFeats =[];
    classFeat1 = false;
    bonusSkillTrainings = 0;
    edicts = "";
    anathema = "";

    constructor (dict) {
        super(dict);
    };
}

