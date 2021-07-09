//柯里化案例
// console.log('2 23 4'.match(/\s+/g));
// console.log('234 4 5'.match(/\d+/g));
const _ = require('lodash')


const match = _.curry(function(reg, str) {
  return str.match(reg)
})
const haveSpace = match(/\s+/g)
const haveNumber = match(/\d+/g)
const filter = _.curry((func, array) => array.filter(func))
const findSpace = filter(haveSpace)


// console.log(haveSpace('helloworld'));
//console.log(haveNumber('123abc321'));


console.log(filter(haveSpace, ['John Connor', 'John_Donne']));

console.log(findSpace(['John Connor', 'JohnDonne']));