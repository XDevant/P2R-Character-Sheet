import Controlers from "./JS/Controlers.mjs";


const baseData = ["name", "level", "ancestry", "heritage", "sizeName", "background", "class"];
const abilitiesData = ["str", "dex", "con", "int", "wis", "cha"];
const armorData = [];
const shieldData = [];
const saveData = ["fortitude", "reflex", "will"];
const weaponData = [];


let control = new Controlers(document);
document.getElementById("loadbutton").addEventListener("change", (e) => control.loadCharacter(e));

const fillAbilities = obj => {
    abilitiesData.forEach(
        (key) => {
            if (Object.keys(obj.build.abilities).includes(key + "mod")) {
                document.getElementById(key + "mod").textContent = obj.build.abilities[key + "mod"];
                }
            else if (Object.keys(obj.build.abilities).includes(key)) {
                document.getElementById(key + "mod").textContent = Math.floor((parseInt(obj.build.abilities[key]) - 10) / 2);
                }
                else {
                    showMessage("Missing key:" + key, "warning");
                    return;
                    }
            if (Object.keys(obj.build.abilities).includes(key + "boost")) {
                document.getElementById(key + "boost").checked = obj.build.abilities[key + "boost"];
                }
            else if (Object.keys(obj.build.abilities).includes(key)) {
                document.getElementById(key + "boost").checked = ((parseInt(obj.build.abilities[key]) - 10) % 2) === 1;
                }
                else {
                    showMessage("Missing boost:" + key, "warning");
                    return;
                    }
        }
    )
}
