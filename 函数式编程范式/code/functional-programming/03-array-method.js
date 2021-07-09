//模拟高阶函数： map every some

//map
const map = (array, fn) => {
  let results = [];
  for (let value of array) {
    results.push(fn(value))
  }
  return results
}

//测试
// let arr = [1, 2, 3, 4]
// arr = map(arr, v => v * v)
// console.log(arr);


//every
const every = (array, fn) => {
  let result = true
  for (let value of array) {
    result = fn(value)
    if (!result) {
      break
    }
  }
  return result
}

//测试
// let arr = [11, 12, 13, 14, 9]
// let r = every(arr, v => v > 10)
// console.log(r);

//some
const some = (array, fn) => {
  let result = false
  for (let value of array) {
    result = fn(value)
    if(result) {
      break
    }
  }
  return result
}

//测试
let arr = [1, 3, 5, 7, 9, 10]
let r = some(arr, v => v % 2 === 0)
console.log(r);