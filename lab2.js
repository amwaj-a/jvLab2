function sum(num1, num2) {
  return num1 + num2;
}

let sub = (num1, num2) => {
  return num1 - num2;
};

let mul = function (num1, num2) {
  return num1 * num2;
};
function div(num1, num2) {
  return num1 / num2;
}

console.log(`sum ${sum(4, 2)}`);
console.log(`sub ${sub(4, 2)}`);
console.log(`mult ${mul(4, 2)}`);

console.log(`div ${div(4, 2)}`);
