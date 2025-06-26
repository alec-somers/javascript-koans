import _ from "underscore";

const myArr = [1, 2, 3, 4, 5, [1, 2]];

console.log(_.flatten(myArr));

console.log(
  _.filter(myArr, function (num) {
    return num % 2 === 0;
  })
);

console.log(_.indexOf(myArr, 3, true));
