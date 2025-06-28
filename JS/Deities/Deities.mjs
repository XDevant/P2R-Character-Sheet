import { deitiesDict } from "./Dict.mjs";

export default class Deities {
    name = ""
    edicts = "";
    anathema = "";
    areasOfConcern = "";
    sacredSymbol = "";
    sacredAnimal = "";
    sacredColor ="";
    attribute = "";
    skill = "";
    favoredWeapon = "";
    font = "";
    fonts = [];
    sanctifications = [];
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
