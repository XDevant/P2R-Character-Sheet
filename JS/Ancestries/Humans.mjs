import Ancestries from "./Ancestries.mjs";
import { Skilled, Versatile } from "./HeritagesHumans.mjs";

export default class Humans extends Ancestries {
    name = "Human"
    attributeBoosts = 2;
    hp = 8;
    traits = ["human", "humanoid"];
    languages = ["Common"];
    bonusLanguages = 1;
    description = "";
    heritages = {"Skilled": Skilled, "Versatile": Versatile};
    featChoice = ["human"];

    constructor(dict) {
        super(dict);
    }
}