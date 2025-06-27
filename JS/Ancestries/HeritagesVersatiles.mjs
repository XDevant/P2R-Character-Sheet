import Heritages from "./Heritages.mjs";

export class Aiuvarin extends Heritages {
    lowLightVision = true;
    featChoice = ["elf", "aiuvarin"];
    traits = ["elf", "aiuvarin"];
    description = "You have elves, or possibly other aiuvarins, in your family tree. You have pointed ears and other telltale signs of elf heritage. You gain the elf trait, the aiuvarin trait, and low-light vision. In addition, when you gain an ancestry feat, you can choose from aiuvarin and elf feats in addition to those from your ancestry.";
}

export class Dromaar extends Heritages {
    lowLightVision = true;
    featChoice = ["orc"];
    traits = ["orc", "dromaar"];
    description = "Orcish strength emboldens your bloodline. You have a green tinge to your skin and other indicators of orc heritage. You gain the orc trait, the dromaar trait, and low-light vision. When you gain an ancestry feat, you can choose from dromaar and orc feats in addition to those from your ancestry.";
}