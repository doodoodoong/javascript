const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

const additionalResult = add(1, 2);

currentResult = additionalResult;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);
