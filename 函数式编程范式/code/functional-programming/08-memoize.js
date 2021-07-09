//记忆函数
const _ = require('lodash')

function getArea (r) {
  console.log(r);
  return Math.PI * r * r
}

// let getAreaWithMemory = _.memoize(getArea)
// console.log(getAreaWithMemory(4));
// console.log(getAreaWithMemory(4));
// console.log(getAreaWithMemory(4));
// console.log(getAreaWithMemory(4));

//模拟memoize方法的实现

function memoize (fn) {
  let cache = {}
  return function () {
    let key = JSON.stringify(arguments)
    cache[key] = cache[key] || fn.apply(fn, arguments)
    return cache[key]
  }
}
let getAreaWithMemory = memoize(getArea)
console.log(getAreaWithMemory(4));
console.log(getAreaWithMemory(4));
console.log(getAreaWithMemory(4));
