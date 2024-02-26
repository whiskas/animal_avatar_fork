"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = require("./utils/array");
const svg_1 = require("./utils/svg");
const random_1 = require("./utils/random");
const palette_1 = require("./palette");
const shapes_1 = require("./shapes");
const avatar = (seed, { size = 150, avatarColors = palette_1.avatarColors, backgroundColors = palette_1.backgroundColors, blackout = true, round = true, } = {}) => {
    const random = (0, random_1.seedrandom)(seed);
    const backgroundColor = (0, array_1.pick)(backgroundColors, random());
    const avatarColor = (0, array_1.pick)(avatarColors, random());
    const optional = (shapes) => shapes.map((shape) => random() % 2 ? shape : shapes_1.emptyShape);
    const shapes = [
        shapes_1.faces,
        optional(shapes_1.patterns),
        shapes_1.ears,
        optional(shapes_1.hairs),
        shapes_1.muzzles,
        shapes_1.eyes,
        shapes_1.brows,
    ];
    const createAvatar = () => shapes
        .map((shape) => (0, array_1.pick)(shape, random()))
        .map((shape) => shape(avatarColor))
        .join('');
    return (0, svg_1.createSvg)(size, (0, svg_1.createBackground)(round, backgroundColor), createAvatar(), blackout ? (0, svg_1.createBlackout)(round) : '');
};
exports.default = avatar;
