import Heritages from "./Heritages.mjs";

export class Skilled extends Heritages {
    proficiencies = [{1: {"heritageskill": 2}, 5: {"heritageskill": 4}}];
    choice = "";
}

export class Versatile extends Heritages {
    bonusFeat = {"name": "", "origin": "heritage", "level": 1, "type": "general"};
    choice = "";
}