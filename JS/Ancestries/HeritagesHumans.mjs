import Heritages from "./Heritages.mjs";

export class Skilled extends Heritages {
    name = "Skilled";
    proficiencies = [{1: {"heritageskill": 2}, 5: {"heritageskill": 4}}];
    choice = "";
}

export class Versatile extends Heritages {
    name = "Versatile";
    bonusFeat = {"name": "", "origin": "heritage", "level": 1, "type": "general"};
    choice = "";
}