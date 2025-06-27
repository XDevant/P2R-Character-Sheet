import { deitiesDict } from "./Dict.mjs";

export default class Deities {
    name = ""
    edicts = "";
    anathemas = "";
    areaOfConcern = "";
    sacredSymbol = "";
    sacredColor ="";
    attribute = "";
    skill = "";
    favoredWeapon = "";
    fonts = "";
    fontChoice = [];
    sanctification = "NO";
    sanctificationOptions = [];
    domains = [];
    spells = [];
    pantheons = [];
    members = [];
    description = "";

    constructor (name) {
        this.name = name;
        if (Object.keys(deitiesDict).includes(name)) {
                    Object.keys(deitiesDict[name]).forEach( key => {
                        this[key] = deitiesDict[name][key];
                    })
                }
    }
}
