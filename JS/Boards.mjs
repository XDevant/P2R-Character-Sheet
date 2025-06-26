export default class Boards {
    width = 1;
    heigth = 1;
    backgroundImage ="";

    constructor(width=1, heigth=1, backgroundImage="") {
        this.width = width;
        this.heigth = heigth;
        if (backgroundImage) {
            this.backgroundImage = "";
        }
    }
}