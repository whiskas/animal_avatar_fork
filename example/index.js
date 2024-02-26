const avatar = require('../dist/cjs/index.js').default;

console.log(avatar);

const svg = avatar("asdfasdfasfd", { size: 200 });

console.log(svg)
