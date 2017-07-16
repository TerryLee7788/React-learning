// function one (name, location) {
//   console.log(name, location);
// }
//
// function two () {
//   console.log('Args: ', arguments);
//   one.apply(undefined, arguments);
// }
//
// two('Terry', 'Taiwan');

const add = (a, b) => a + b;
const square = a => a * a;

console.log(add(50, 20));

const callAndLog = (func) => {
  return function () {
    let res = func.apply(undefined, arguments);
    console.log('res: ', res);
    return res;
  };
};

const addAndLog = callAndLog(add);
console.log(addAndLog(20, 20));

const squareAndLog = callAndLog(square);
console.log(squareAndLog(3));