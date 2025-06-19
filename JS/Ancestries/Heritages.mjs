

export default class Heritages {
    name = ""
    lowLightVision = false;
    darkvision = false;
    hp = 0;
    traits = [];
    resistances = [];
    innateSpells = [];
    proficiencies = [];
    bonusLanguages = [];
    description = "";

    constructor (name) {
        this.name = name
    }
}
