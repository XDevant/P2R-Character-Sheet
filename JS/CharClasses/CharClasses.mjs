export default class CharClasses {
    name = "";
    hpPerLevel = 4;
    keyattribute = "";
    keyattributes = [];
    subclassName = "";
    subclassChoice = null;
    subclassList = {};
    spellcasting = false;
    spellcastingType = "";
    spellcastingTradition = "";
    spellcastingAttribute = ""
    increasedSkillRate = false;
    favoredWeapon = false;
    proficiencies = {
        1: {"classDC": 2, "perception": 2, "fortitude": 2, "reflex": 2, "will": 2, "unarmored": 2, "unarmed": 2}, 
        3: [], 5: [], 7: [], 9: [], 11: [], 13: [], 15: [], 17: [], 19: []};
    features = {1: [], 3: [], 5: [], 7: [], 9: [], 11: [], 13: [], 15: [], 17: [], 19: []};
    bonusFeats =[];
    classFeat1 = false;
    bonusSkillTrainings = 0;
    edicts = "Roll d20s.";
    anathema = "Don't puke over GM's screen.";

    constructor(dict) {
        if (dict && Object.keys(dict).includes("subclassChoice")) {
            this.setSubclass(dict["subclassChoice"]);
        }
        if (dict && Object.keys(dict).includes("keyattribute")) {
            this.setKeyattribute(dict["keyattribute"]);
        }
    }

    setSubclass(choice) {
        if (this.subclassList) {
            if (choice && choice in this.subclassList) {
                const subclasses = this.subclassList[choice];
                this.subclassChoice = new subclasses();
            }
        }
    }

    setKeyattribute(attr) {
        if (this.keyattributes) {
            if (attr && attr in this.keyattributes) {
                this.keyattribute = attr;
            } else {
                this.keyattribute = this.keyattributes[0];
            }
        }
    }
}
