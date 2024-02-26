"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedrandom = void 0;
const seedrandom = (seed) => {
    let value = hash(seed);
    const nextValue = () => value = xorshift32(value);
    return () => nextValue();
};
exports.seedrandom = seedrandom;
const xorshift32 = (value) => shiftLeft(shiftRight(shiftLeft(value, 13), 17), 5);
const shiftLeft = (value, shift) => value ^ (value << shift);
const shiftRight = (value, shift) => value ^ (value >> shift);
const hash = (seed) => seed.split('')
    .map((x) => x.charCodeAt(0))
    .reduce((hash, x) => toInt32((hash << 5) - hash + x), 0);
const toInt32 = (x) => x | 0;
