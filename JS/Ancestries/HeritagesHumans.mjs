import Heritages from "./Heritages.mjs";

export class Skilled extends Heritages {
    name = "Skilled";
    proficiencies = {1: {"heritageSkill": 2}, 5: {"heritageSkill": 4}};
    choice = "";
}

export class Versatile extends Heritages {
    name = "Versatile";
    bonusFeats = [{"name": "", "origin": "heritage", "level": 1, "type": "general"}];
    choice = "";
}