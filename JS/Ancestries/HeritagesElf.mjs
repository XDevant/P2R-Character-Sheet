import Heritages from "./Heritages.mjs";

export class Ancient extends Heritages {
    bonusFeat = {"name": "", "origin": "heritage", "level": 1, "type": "archetype"};
}

export class Arctic extends Heritages {
    resistances = [{"cold": "level/2"}];
}

export class Cavern extends Heritages {
    darkvision = true;
}

export class Seer extends Heritages {}

export class Woodland extends Heritages {}

export class Whisper extends Heritages {}