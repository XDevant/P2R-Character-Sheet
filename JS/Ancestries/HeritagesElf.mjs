import Heritages from "./Heritages.mjs";

export class Ancient extends Heritages {
    name = "Ancient";
    bonusFeat = {"name": "", "origin": "heritage", "level": 1, "type": "archetype"};
}

export class Arctic extends Heritages {
    name = "Arctic";
    resistances = [{"cold": "level/2"}];
}

export class Cavern extends Heritages {
    name = "Cavern"
    darkvision = true;
}

export class Seer extends Heritages {
    name = "Seer";
}

export class Woodland extends Heritages {
    name = "Woodland";
}

export class Whisper extends Heritages {
    name = "Whisper";
}