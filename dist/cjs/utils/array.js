"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = void 0;
const MIN = -(Math.pow(2, 31));
const MAX = (Math.pow(2, 31)) - 1;
const pick = (arr, index) => arr[integer(index, 0, arr.length - 1)];
exports.pick = pick;
const integer = (value, min, max) => Math.floor(((value - MIN) / (MAX - MIN)) * (max + 1 - min) + min);
