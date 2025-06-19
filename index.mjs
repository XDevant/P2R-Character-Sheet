import { dynamicCharClasses } from "./JS/CharClasses/DynamicCharClasses.mjs";
import { PlayerCharacters } from "./JS/templates.mjs";

let fileContent = "";
const messageDisplay = document.getElementById("message");
const baseData = ["name", "level", "ancestry", "heritage", "sizeName", "background", "class"];
const abilitiesData = ["str", "dex", "con", "int", "wis", "cha"];
const armorData = [];
const shieldData = [];
const saveData = ["fortitude", "reflex", "will"];
const weaponData = [];

const loadCharacter = e => {
    messageDisplay.textContent = "";
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
        fileContent = JSON.parse(reader.result);
        if (!fileContent) {
            showMessage("Error parsing the file.", "error");
            return;
        };
        showMessage("File loaded");
        fillSheet(fileContent)
    };
    reader.onerror = () => {
        showMessage("Error reading the file. Please try again.", "error");
    };
    reader.readAsText(file)
}

const showMessage = (message, type) => {
  messageDisplay.textContent += message;
  messageDisplay.style.color = type === "error" ? "red" : "green";
}

const fillBase = obj => {
    baseData.forEach(
        (key) => {
            if (!(Object.keys(obj.build).includes(key))) {
                showMessage("Missing key:" + key, "warning");
                return;
                }
            document.getElementById(key).textContent = obj.build[key];
        }
    )
}

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

const fillSheet = obj => {
    if  (!(Object.keys(obj).includes("build"))) {
        showMessage("File is not a character save" + Object.keys(obj), "error");
        return;
    }
    
    let sep = new PlayerCharacters("sep", "Clerics");
    document.getElementById("class").textContent = sep.charClass.name;
    fillBase(obj);
    fillAbilities(obj);
}


document.getElementById("loadbutton").addEventListener("change", loadCharacter);