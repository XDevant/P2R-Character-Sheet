

class ClericSubclasses {
    name = "Unknown";
    keyattribute = "";
    proficiencies = {
        3: {}, 
        7: {}, 
        11: {}, 
        15: {}, 
        19: {}
    };
    features = {};
    bonusFeats = [];
    description = "";
}

export class CloisteredClerics extends ClericSubclasses{
    name = "Cloistered Cleric";
    proficiencies = {
        3: {"fortitude": 4}, 
        7: {"spellAttack": 4, "spellDC": 4}, 
        11: {"unarmed": 4, "simple": 4, "favoredWeapon": 4, "criticalSpecialization": 1}, 
        15: {"spellAttack": 6, "spellDC": 6}, 
        19: {"spellAttack": 8, "spellDC": 8}
    };
    features = {};
    bonusFeats = [];
    description = "";
}

export class Warpriests extends ClericSubclasses {
    name = "Warpriest";
    keyattribute = "str";
    proficiencies = {
        3: {},
        7: {},
        11: {},
        15: {},
        19: {}
    };
    features = {};
    bonusFeats = [];
    description = "";
}