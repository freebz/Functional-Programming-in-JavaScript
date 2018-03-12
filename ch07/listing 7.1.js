// Listing 7.1  Lodash's lazy evaluation and shortcut fusion

const square = (x) => Math.pow(x, 2);
const isEven = (x) => x % 2 === 0;
const numbers = _.range(200);

const result =
      _.chain(numbers)
      .map(square)
      .filter(isEven)
      .take(3)
      .value();  //-> [0, 4, 16]

result.length;   //-> 3
