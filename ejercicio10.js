//Ejercicio 10

const numbers = [12, 21, 38, 5, 45, 37, 6];
const age = [9, 33, 90, 21];

function average(numberList) {
  let sum = 0;
  for (const number of numberList) {
    sum += number;
  }
  const result = sum / numberList.length;
  return result;
}

const result1 = average(numbers);
console.log("El resultado es: " + result1);

const result2 = average(age);
console.log("El resultado es: " + result2);