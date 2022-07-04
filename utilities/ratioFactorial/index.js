const factorialOfNumber = require("../factorial/index");
const ratioOfTwoNumbers = require("../ratio/index");

const ratioAndFacorial = (num1, num2, num3) => {
  const ratio = ratioOfTwoNumbers(num1, num2);
  const fact = factorialOfNumber(num3);
  return { ratio, fact };
};
module.exports = ratioAndFactorial;
