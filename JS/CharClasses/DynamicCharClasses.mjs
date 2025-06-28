import Bards from './Bards.mjs';
import Clerics from './Clerics.mjs';
import CharClasses from './CharClasses.mjs';

export const charClasses = {
    Bards, Clerics
};

export function dynamicCharClasses(name) {
    if (Object.keys(charClasses).includes(name)) {
        return charClasses[name];
    }
    return CharClasses;
}

