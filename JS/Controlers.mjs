import PlayerCharacters from "./PlayerCharacters.mjs";
import Boards from "./Boards.mjs";

const baseData = ["name", "level", "ancestry", "heritage", "background", "class"];

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
                if (Controlers.checkImport(key, obj)) {
                    dict[key] = obj.build[oldkey];
                }
            })
        }
        return dict;
    }

    static checkImport(key, dict) {
        if (Object.keys(dict.build).includes(key)) {
            return true;
        }
        return false;
    }

}