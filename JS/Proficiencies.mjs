import Helpers from "./Helpers/Helpers.mjs";

export default class Proficiencies {
    proficiencies = {"perception": [2]};
    proficiencyBonuses = {"perception": 2};

    constructor() {
        const h = new Helpers();
        this.proficiencies = h.proficienciesFactory(h.armors.concat(h.saves, h.skills, h.weapons, h.otherProficiencies));
        this.computeAllProfBonuses();
    }

    collectProficiencies(profs, level) {
        Object.keys(profs).forEach(key1 => {
            if (parseInt(key1) <= level) {
                Object.keys(profs[key1]).forEach(key2 => {
                    this.proficiencies[key2].push(profs[key1][key2]);
                });
            }
        });
    }

    computeProfBonus(key) {
        if (Object.keys(this.proficiencies).includes(key)) {
            this.proficiencyBonuses[key] = Math.max(...this.proficiencies[key]);
        }
    }

    computeAllProfBonuses() {
        Object.keys(this.proficiencies).forEach( key => {
            this.computeProfBonus(key);
        });
    } 
}
