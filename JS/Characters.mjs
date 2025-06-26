import { dynamicCharClasses } from "./CharClasses/DynamicCharClasses.mjs";
import Ancestries from "./Ancestries/Ancestries.mjs";
import Backgrounds from "./Backgrounds/Backgrounds.mjs";
import Deities from "./Deities/Deities.mjs";
import Heritages from "./Ancestries/Heritages.mjs";
import Attributes from "./Attributes.mjs";

export class PlayerCharacters {
    name = "Placeholder";
    class = null;
    level = 1;
    dualClass = null;
    ancestry = null;
    heritage = null;
    background = null;
    deity = null;

    constructor(name="", charClass=null, ancestry=null, background=null, dict=null) {
        if (name) {
            this.name = name;
        } else {
            if (dict && dict.name) {
                this.name = dict.name;
            }
        }
        if (charClass) {
            this.setCharClass(charClass)
        } else {
            if (this.checkDictKey("charClass", dict)) {
                this.setCharClass(dict.charClass);
            }
        }
        if (ancestry) {
                this.ancestry = new Ancestries(ancestry);
        }
        if (background) {
                this.background = new Backgrounds(background);
        }
    }

    checkDictKey(key, dict) {
        if (dict) {
            return true;
        return false;
        }
    }
    
    setCharClass(charClass) {
        const DyClass = dynamicCharClasses(charClass);
        this.charClass = new DyClass();
    }
    setAncestry() {};
    setBackgronud() {};

}
