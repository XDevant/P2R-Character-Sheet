import Bards from './Bards.mjs';
import Clerics from './Clerics.mjs';

export const charClasses = {
    Bards, Clerics
};

export function dynamicCharClasses (name) {
     return charClasses[name];
    };

