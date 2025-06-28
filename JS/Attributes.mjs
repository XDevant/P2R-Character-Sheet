
export default class Attributes {
    mods = {
        "str": 0,
        "dex": 0,
        "con": 0,
        "int": 0,
        "wis": 0,
        "cha": 0,
    };
    boosts = {
        "str": false,
        "dex": false,
        "con": false,
        "int": false,
        "wis": false,
        "cha": false,
    };
    breakdown = {
        "ancestryBoosts": [],
        "ancestryFlaws": [],
        "backgroundBoosts": [],
        "classBoosts": [],
        1: [],
        5: [],
        10: [],
        15: [],
        20: [],
        "apex": 0,
    };
    checked = false;

    constructor(breakDict, level) {
        if (breakDict) {
            this.breakdown = breakDict;
        }
        this.calcMods(level);
    }

    calcMods (level) {
        let mods = {
            "str": 0,
            "dex": 0,
            "con": 0,
            "int": 0,
            "wis": 0,
            "cha": 0,
            };
        this.breakdown.ancestryBoosts.forEach(
            (attrib) => mods[attrib.toLowerCase()] += 1
        )
        this.breakdown.backgroundBoosts.forEach(
            (attrib) => mods[attrib.toLowerCase()] += 1
        )
        this.breakdown.classBoosts.forEach(
            (attrib) => mods[attrib.toLowerCase()] += 1
        )
        this.breakdown.ancestryFlaws.forEach((attribute) => {
            mods[attribute.toLowerCase()] -= 1;
        })
        console.log(mods);
        this.breakdown[1].forEach(
            (attrib) => mods[attrib.toLowerCase()] += 1
        )
        if (level >= 5) {
            this.breakdown[5].forEach((attribute) => {
                mods[attribute.toLowerCase()] += 1;
            });
        }
        if (level >= 10) {
            this.breakdown[10].forEach((attribute) => {
                mods[attribute.toLowerCase()] += 1;
            });
        }
        if (level >= 15) {
            this.breakdown[15].forEach((attribute) => {
                mods[attribute.toLowerCase()] += 1;
            });
        }
        if (level >= 20) {
            this.breakdown[20].forEach((attribute) => {
                mods[attribute.toLowerCase()] += 1;
            });
        }

        console.log(mods);
        for (const [key, value] of Object.entries(mods)) {
            if (value > 4) {
                const normValue = Math.floor((value - 4) / 2) + 4;
                this.boosts[key] = (value % 2) === 1;
                this.mods[key] = normValue;
            } else {
                this.mods[key] = value;
                this.boosts[key] = false;
                }
            }
        this.checked = true;
    }
}
