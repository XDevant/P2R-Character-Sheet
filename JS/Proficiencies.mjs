import Helpers from "./Helpers/Helpers.mjs";

export default class Proficiencies {
    proficiencies = {"perception": [2]};
    proficiencyBonuses = {"perception": 2};

    constructor() {
    }

    collectProficiencies(profs, level) {
        Object.keys(profs).forEach(key1 => {
            if (parseInt(key1) <= level) {
                Object.keys(profs[key1]).forEach(key2 => {
                    if (Object.keys(this.proficiencies).includes(key2)) {
                        this.proficiencies[key2].push(profs[key1][key2]);
                    } else {
                        this.proficiencies[key2] =  [profs[key1][key2]];
                    }
                });
            }
        });
    }

    computeProfBonus(key) {
        if (Object.keys(this.proficiencies).includes(key)) {
            this.proficiencyBonuses[key] = Math.max(...this.proficiencies[key], 0) + Math.min(...this.proficiencies[key], 0);
        }
    }

    computeAllProfBonuses() {
        Object.keys(this.proficiencies).forEach( key => {
            this.computeProfBonus(key);
        });
    } 
}
