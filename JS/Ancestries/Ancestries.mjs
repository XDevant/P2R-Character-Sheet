import { Aiuvarin, Dromaar } from "./HeritagesVersatiles.mjs";
import Heritages from "./Heritages.mjs";

export default class Ancestries {
    name = "weak human"
    attributeBoosts = 1;
    ancestryFlaws = [];
    ancestryBoosts = [];
    hp = 4;
    size = 2;
    sizeName = "Medium";
    lowLightVision = false;
    darkvision = false;
    speed = 25;
    traits = ["human"];
    innateSpells = [];
    languages = [];
    bonusLanguages = 0;
    languageList = [];
    description = "";
    heritage = new Heritages();
    versatileHeritages = {"Aiuvarin": Aiuvarin, "Dromaar": Dromaar};
    heritages = {};
    featChoice = [];

    constructor(dict) {}
    
    setHeritage(choice) {
        if (this.versatileHeritages) {
            if (choice && choice in this.versatileHeritages) {
                const heritages = this.versatileHeritages[choice];
                this.heritage = new heritages();
                return;
            }
        }
        if (this.heritages) {
            if (choice && choice in this.heritages) {
                const heritages = this.heritages[choice];
                this.heritage = new heritages();
                return;
            }
        }
    }
}
