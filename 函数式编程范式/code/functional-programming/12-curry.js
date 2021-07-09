//模拟实现 lodash 中的 curry 方法
// const _ = require('lodash')

function getSum (a, b, c) {
  return a + b + c
}

const curryied = curry(getSum)

// console.log(curryied(1, 2, 3));
console.log(curryied(1, 2)(3));
// console.log(curryied(1)(2, 3));

function curry (func) {
  // console.log(func.length);
  return function curryiedFn(...args) {
    console.log(args);
    //判断实参和形参的个数
    if (args.length < func.length) {
      return function () {
        console.log(arguments);
        return curryiedFn(...args.concat(Array.from(arguments)))
      }
    }
    return func(...args)
  }
}

