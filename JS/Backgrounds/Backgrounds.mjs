import { backgroundDict } from "./Dict.mjs";

export default class Backgrounds {
    name = "Unknown";
    attributeBoosts = [];
    attributeFreeBoosts = 1;
    attributeBoostChoice = [];
    lore = "";
    skillFeat = "";
    skillTraining = "";
    description = "";

    constructor (name) {
        this.name = name;
        if (Object.keys(backgroundDict).includes(name)) {
            Object.keys(backgroundDict[name]).forEach( key => {
                this[key] = backgroundDict[name][key];
            })
        }
    }
}
