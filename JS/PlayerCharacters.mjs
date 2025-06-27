import Characters from "./Characters.mjs";

export default class PlayerCharacters extends Characters{

    constructor(dict) {
        super(dict);
    }

    setLevel(level) {
        super.setLevel(level);
        this.displayLevel();
    }
    
    setCharClass(charClass) {
        super.setCharClass(charClass);
        this.displaycharClass();
    }

    setAncestry(ancestry) {
        super.setAncestry(ancestry)
        this.displayAncestry();
    }

    setBackground(background) {
        super.setBackground(background);
        this.displayBackground();
    }

    displaycharClass() {
        document.getElementById("class").textContent = this.charClass.name;
    }

    displayLevel() {
        document.getElementById("level").textContent = this.level;
    }

    displayAncestry() {
        document.getElementById("ancestry").textContent = this.ancestry.name;
    }

    displayBackground() {
        document.getElementById("background").textContent = this.background.name;
    }
    
    selectCharClass() {};
    selectAncestry() {};
    selectBackgronud() {};

}
