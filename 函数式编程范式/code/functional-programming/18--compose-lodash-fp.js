//函数组合 调试
// NEVER SAT DIE - nver-say-die

const fp = require("lodash/fp");


const f = fp.flowRight(fp.join('-'), fp.map(fp.toLower), fp.split(' '))



console.log(f("NEVER SAT DIE"));