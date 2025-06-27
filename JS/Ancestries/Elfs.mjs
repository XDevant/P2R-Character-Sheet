import Ancestries from "./Ancestries.mjs";

export default class Elfs extends Ancestries {
    name = "Elf"
    attributeBoosts = 1;
    ancestryFlaws = ["con"];
    ancestryBoosts = ["dex", "int"];
    hp = 6;
    size = 2;
    sizeName = "Medium";
    lowLightVision = true;
    speed = 30;
    traits = ["elf", "humanoid"];
    innateSpells = [];
    languages = ["Elven", "Common"];
    bonusLanguages = 0;
    languageList = ["Draconic", "Empyrean", "Fey", "Gnomish", "Goblin", "Kholo", "Orcish"];
    description = "";
    heritages = {};
}