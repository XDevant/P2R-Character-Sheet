import Controlers from "./JS/Controlers.mjs";


const abilitiesData = ["str", "dex", "con", "int", "wis", "cha"];
const armorData = [];
const shieldData = [];
const saveData = ["fortitude", "reflex", "will"];
const weaponData = [];


let control = new Controlers(document);
document.getElementById("loadbutton").addEventListener("change", (e) => control.loadCharacter(e));
