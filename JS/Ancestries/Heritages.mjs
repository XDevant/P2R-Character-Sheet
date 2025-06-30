

export default class Heritages {
    name = "Unknown"
    lowLightVision = false;
    darkvision = false;
    hp = 0;
    traits = [];
    resistances = [];
    innateSpells = [];
    proficiencies = {1: {}};
    bonusLanguages = [];
    description = "";
    featChoice = [];

    constructor (name) {
        this.name = name
    }
}
