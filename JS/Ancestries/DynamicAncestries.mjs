import Elfs from './Elfs.mjs';
import Humans from './Humans.mjs';

export const ancestries = {
    Elfs, Humans
};

export function dynamicAncestry(name) {
     return ancestries[name];
    };