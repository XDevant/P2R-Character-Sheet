

export default class Ancestries {
    name = "weak human"
    attributeBoosts = 1;
    ancestryFlaws = [];
    ancestryBoosts = [];
    hp = 4;
    size = 2;
    sizeName = "Medium";
    lowLightVision = false;
    darkvision = false;
    speed = 25;
    traits = ["human"];
    innateSpells = [];
    languages = [];
    bonusLanguages = 0;
    languageList = [];
    description = "";

    constructor (name) {
        this.name = name
    }
}
