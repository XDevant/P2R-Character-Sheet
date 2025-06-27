import { dynamicCharClasses } from "./CharClasses/DynamicCharClasses.mjs";
import Ancestries from "./Ancestries/Ancestries.mjs";
import Backgrounds from "./Backgrounds/Backgrounds.mjs";
import Deities from "./Deities/Deities.mjs";
import Heritages from "./Ancestries/Heritages.mjs";
import Attributes from "./Attributes.mjs";

export default class Characters {
    name = "Placeholder";
    charClass = null;
    level = 1;
    dualClass = null;
    ancestry = null;
    heritage = null;
    background = null;
    deity = null;

    constructor(dict) {
        this.name = dict.name;
        if (this.checkDictKey("class", dict)) {
            this.setCharClass(dict.class, dict);
        }
        if (this.checkDictKey("ancestry", dict)) {
            this.setAncestry(dict.ancestry);
        }
        if (this.checkDictKey("background", dict)) {
            this.setBackground(dict.background);
        }
        if (this.checkDictKey("level", dict)) {
            this.setLevel(dict.level);
        }
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
    }

    setAncestry(ancestry) {
        this.ancestry = new Ancestries(ancestry);
    }

    setBackground(background) {
        this.background = new Backgrounds(background);
    }

}
