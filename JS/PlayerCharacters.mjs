import Characters from "./Characters.mjs";

export default class PlayerCharacters extends Characters{
    name = "Placeholder";
    charClass = null;
    level = 1;
    dualClass = null;
    ancestry = null;
    heritage = null;
    background = null;
    deity = null;
    attributes = null;

    constructor(dict) {
        super(dict);
    }
    
    setCharClass(charClass) {
        super.setCharClass(charClass);
        this.displaycharClass();
    }

    setAncestry(ancestry) {
        super.setAncestry(ancestry)
    }

    setBackgronud(background) {
        super.setBackground(background);
    }

    displaycharClass() {
        document.getElementById("class").textContent = this.charClass.name;
    }


    
    selectCharClass() {};
    selectAncestry() {};
    selectBackgronud() {};

}
