import { dynamicCharClasses } from "./CharClasses/DynamicCharClasses.mjs";
import CharClasses from "./CharClasses/CharClasses.mjs";
import { dynamicAncestry } from "./Ancestries/DynamicAncestries.mjs";
import Ancestries from "./Ancestries/Ancestries.mjs";
import Backgrounds from "./Backgrounds/Backgrounds.mjs";
import Deities from "./Deities/Deities.mjs";
import Attributes from "./Attributes.mjs";
import Proficiencies from "./Proficiencies.mjs";

export default class Characters {
    name = "Placeholder";
    charClass = new CharClasses();
    level = 1;
    dualClass = null;
    ancestry = new Ancestries();
    background = new Backgrounds();
    deity = new Deities();
    attributes = new Attributes(false, 1);
    hp = {"ancestryhp": 1, "bonushp": 0, "classhppl": 1, "bonushppl": 0, "hpmax": 2, "hp": 2};
    proficiencies = new Proficiencies();

    constructor(dict) {
        this.name = dict.name;
        if (this.checkDictKey("level", dict)) {
            this.setLevel(dict.level);
        }
        if (this.checkDictKey("class", dict)) {
            this.setCharClass(dict.class, dict);
            
            console.log(this.proficiencies.proficiencies)
        }
        if (this.checkDictKey("ancestry", dict)) {
            this.setAncestry(dict.ancestry, dict);
        }
        if (this.checkDictKey("background", dict)) {
            this.setBackground(dict.background);
        }
        if (this.checkDictKey("deity", dict)) {
            this.setDeity(dict.deity);
        }
        this.setAttributes(dict.breakdown)
        this.setHPMax();
        this.computeProfBonus("fortitude");
        console.log(this.proficiencies.proficiencyBonuses.fortitude);
    }

    collectProficiencies(profs) {
        this.proficiencies.collectProficiencies(profs, this.level)
    }

    computeProfBonus(key) {
        this.proficiencies.computeProfBonus(key);
    }

    computeAllProfBonuses() {
        this.proficiencies.computeAllProfBonuses();
    }

    setHPMax() {
        this.hp.ancestryhp = Math.max(this.ancestry.hp, this.ancestry.heritage.hp);
        this.hp.classhppl = this.charClass.hpPerLevel;
        this.hp.hpmax = this.hp.ancestryhp + this.hp.bonushp + (this.hp.classhppl + this.hp.bonushppl + this.attributes.mods.con) * this.level
    }

    checkDictKey(key, dict) {
        if (dict && Object.keys(dict).includes(key)) {
            return true;
        }
        return false;
    }

    setLevel(level) {
        this.level = level;
    }

    setCharClass(charClass, dict) {
        const DyClass = dynamicCharClasses(charClass + "s");
        this.charClass = new DyClass(dict);
        this.collectProficiencies(this.charClass.proficiencies);
    }

    setAncestry(ancestry, dict) {
        const DyAncestry = dynamicAncestry(ancestry + "s");
        this.ancestry = new DyAncestry(dict);
    }

    setBackground(background) {
        this.background = new Backgrounds(background);
    }

    setDeity(deity) {
        this.deity = new Deities(deity);
    }

    setAttributes(breakdown) {
        this.attributes = new Attributes(breakdown, this.level);
    }

}
