const car = require('lodash');

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunks = car.chunk(arr, 3);

console.log(chunks);
