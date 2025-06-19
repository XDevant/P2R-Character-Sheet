

export default class Deities {
    name = ""
    edicts = "";
    anathemas = "";
    areaOfConcern = "";
    sacredSymbol = "";
    sacredColor ="";
    attribute = "";
    skill = "";
    favoredWeapon = "";
    fonts = "";
    fontChoice = [];
    sanctification = "NO";
    sanctificationOptions = [];
    domains = [];
    spells = [];
    pantheons = [];
    members = [];
    description = "";

    constructor (name, status="FOLLOWER", edicts="", anathema="", dict=null) {
        this.name = name;
        this.status = status;
        this.edicts = edicts;
        this.anathema = anathema;
    }
}
