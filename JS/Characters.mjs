import { dynamicCharClasses } from "./CharClasses/DynamicCharClasses.mjs";
import { dynamicAncestry } from "./Ancestries/DynamicAncestries.mjs";
import Backgrounds from "./Backgrounds/Backgrounds.mjs";
import Deities from "./Deities/Deities.mjs";
import Attributes from "./Attributes.mjs";

export default class Characters {
    name = "Placeholder";
    charClass = null;
    level = 1;
    dualClass = null;
    ancestry = null;
    background = null;
    deity = null;

    constructor(dict) {
        this.name = dict.name;
        if (this.checkDictKey("class", dict)) {
            this.setCharClass(dict.class, dict);
        }
        if (this.checkDictKey("ancestry", dict)) {
            this.setAncestry(dict.ancestry, dict);
        }
        if (this.checkDictKey("background", dict)) {
            this.setBackground(dict.background);
        }
        if (this.checkDictKey("level", dict)) {
            this.setLevel(dict.level);
        }
        this.setAttributes(dict.breakdown)
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

    setAncestry(ancestry, dict) {
        const DyAncestry = dynamicAncestry(ancestry + "s");
        this.ancestry = new DyAncestry(dict);
    }

    setBackground(background) {
        this.background = new Backgrounds(background);
    }

    setAttributes(breakdown) {
        this.attributes = new Attributes(breakdown, this.level);
    }

}
