import Characters from "./Characters.mjs";

export default class PlayerCharacters extends Characters{

    constructor(dict) {
        super(dict);
        document.getElementById("name").textContent = this.name;
    }

    setLevel(level) {
        super.setLevel(level);
        this.displayLevel();
    }
    
    setCharClass(charClass, dict) {
        super.setCharClass(charClass, dict);
        this.displayCharClass();
    }

    setAncestry(ancestry, dict) {
        super.setAncestry(ancestry, dict)
        this.displayAncestry();
    }

    setBackground(background) {
        super.setBackground(background);
        this.displayBackground();
    }

    setDeity(deity) {
        super.setDeity(deity);
        this.displayDeity();
    }

    setAttributes(breakDict) {
        super.setAttributes(breakDict);
        this.displayAttributes();
    }

    setHPMax() {
        super.setHPMax();
        this.displayHP();
    }

    computeRoll(key, attributemod, type){
        super.computeRoll(key, attributemod, type);
        this.displayRoll(key, type);
    }

    computeProfBonus(key) {
        super.computeProfBonus(key);
        this.displayProfBonus(key);
    }

    computeMod(key, mod) {
        super.computeMod(key, mod);
        this.displayMod(key, mod);
    }

    displayRoll(key, type) {
        document.getElementById(key).textContent = this[type][key];
    }

    displayProfBonus(key) {
        document.getElementById("proficiencybonus" + key).textContent = this.proficiencies.proficiencyBonuses[key] + this.level;
    }

    displayMod(key, mod) {
        if (Object.keys(this.mods[mod].proficiencyBonuses).includes(key)) {
            document.getElementById(mod + "bonus" + key).textContent = this.mods[mod].proficiencyBonuses[key];
        } else {
            document.getElementById(mod + "bonus" + key).textContent = 0;
        }
    }

    displayCharClass() {
        document.getElementById("class").textContent = this.charClass.name;
        this.displaySubclass();
    }

    displaySubclass() {
        document.getElementById("subclassName").textContent = this.charClass.subclassName;
        document.getElementById("subclassChoice").textContent = this.charClass.subclassChoice.name;
    }

    displayLevel() {
        document.getElementById("level").textContent = this.level;
    }

    displayAncestry() {
        document.getElementById("ancestry").textContent = this.ancestry.name;
        document.getElementById("sizeName").textContent = this.ancestry.sizeName;
        this.displayHeritage();
    }

    displayHeritage() {
        document.getElementById("heritage").textContent = this.ancestry.heritage.name;
    }

    displayBackground() {
        document.getElementById("background").textContent = this.background.name;
    }

    displayDeity() {

    }

    displayAttributes() {
        Object.keys(this.attributes.mods).forEach(key => {
            document.getElementById(key.toLowerCase() + "mod").textContent = this.attributes.mods[key];
            let targets = document.getElementsByClassName(key.toLowerCase() + "mod");
            for (let i=0; i < targets.length; i++) {
                targets[i].textContent = this.attributes.mods[key];
            }
            document.getElementById(key.toLowerCase() + "boost").checked = this.attributes.boosts[key];
        })
    }

    displayHP() {
        document.getElementById("hpmax").textContent = this.hp.hpmax;
        document.getElementById("hp").textContent = this.hp.hp;
        document.getElementById("ancestryhp").textContent = this.hp.ancestryhp;
        document.getElementById("classhppl").textContent = this.hp.classhppl;
        document.getElementById("bonushp").textContent = this.hp.bonushp;
        document.getElementById("bonushppl").textContent = this.hp.bonushppl;
    }
    
    selectCharClass() {};
    selectAncestry() {};
    selectBackgronud() {};

}
