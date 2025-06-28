import PlayerCharacters from "./PlayerCharacters.mjs";
import Boards from "./Boards.mjs";

const baseData = ["name", "level", "ancestry", "heritage", "background", "class", "subclassChoice", "deity"];
const breakDictFactory = () => {
    return {"ancestryBoosts": [], "ancestryFlaws": [], "backgroundBoosts": [], "classBoosts": [], 1: [], 5: [], 10: [], 15: [], 20: [], "apex": 0,};
}

export default class Controlers {
    document = "<p classe='message'></p>";
    board = new Boards();
    playerCharacter = new PlayerCharacters({"name": "Blob"});

    constructor(document=null, board=null, playerCharacter=null) {
        if (document) {
            this.document = document
        }
        if (board) {
            this.board = board;
        }
        if (playerCharacter) {
            this.playerCharacter = playerCharacter;
        }
    }

    showMessage(message, type) {
        const messageDisplay = this.document.getElementById("message");
        if (type === "new") {
            messageDisplay.textContent = message;
        } else {
            messageDisplay.textContent += message;
            messageDisplay.style.color = type === "error" ? "red" : "green";
        }
    }

    loadCharacter(event) {
        this.showMessage("", "new");
        const file = event.target.files[0];
        const reader = new FileReader();
        let fileContent = {};
        reader.onload = () => {
            fileContent = JSON.parse(reader.result);
            if (!fileContent) {
                this.showMessage("Error parsing the file.", "error");
                return;
            };
            this.showMessage("File loaded");
            let dict = fileContent;
            if (Object.keys(dict).includes("build")) {
                dict = Controlers.buildToDict(fileContent);
                this.showMessage("and translated from builder");
            }
            if (Object.keys(dict).includes("base")) {
                this.playerCharacter = new PlayerCharacters(dict);
            } else {
                this.showMessage("File is not a valid save", "error");
            }
        };
        reader.onerror = () => {
            this.showMessage("Error reading the file. Please try again.", "error");
        }
        reader.readAsText(file);
    }

    static buildToDict(obj) {
        let dict = {"base": ""};
        if (obj) {
           baseData.forEach(key => {
                let oldkey = key;
                if (key === "keyattribute") {
                    oldkey = "keyability";
                }
                if (Controlers.checkImport(key, obj.build)) {
                    dict[key] = obj.build[oldkey];
                }
            });
            if (Controlers.checkImport("abilities", obj.build) && Controlers.checkImport("breakdown", obj.build.abilities)) {
                dict["breakdown"] = breakDictFactory();
                ["1", "5", "10", "15", "20"].forEach( key => {
                    if (Controlers.checkImport(key, obj.build.abilities.breakdown.mapLevelledBoosts)) {
                        dict.breakdown[parseInt(key)] = obj.build.abilities.breakdown.mapLevelledBoosts[key];
                    }
                })
                if (Controlers.checkImport("ancestryFree", obj.build.abilities.breakdown) && Controlers.checkImport("ancestryBoosts", obj.build.abilities.breakdown)) {
                    dict.breakdown.ancestryBoosts = obj.build.abilities.breakdown.ancestryFree.concat(obj.build.abilities.breakdown.ancestryBoosts);
                }
                if (Controlers.checkImport("ancestryFlaws", obj.build.abilities.breakdown)) {
                    dict.breakdown.ancestryFlaws = obj.build.abilities.breakdown.ancestryFlaws;
                }
                if (Controlers.checkImport("backgroundBoosts", obj.build.abilities.breakdown)) {
                    dict.breakdown.backgroundBoosts = obj.build.abilities.breakdown.backgroundBoosts;
                }
                if (Controlers.checkImport("classBoosts", obj.build.abilities.breakdown)) {
                    dict.breakdown.classBoosts = obj.build.abilities.breakdown.classBoosts;
                }
            }
        }
        return dict;
    }

    static checkImport(key, dict) {
        if (Object.keys(dict).includes(key)) {
            return true;
        }
        return false;
    }

}