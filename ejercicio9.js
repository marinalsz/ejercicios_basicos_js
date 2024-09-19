//Ejercicio 9

const numbers = [1, 2, 3, 5, 45, 37, 58];
const ages = [100, 200, 300];

function sumNumbers(numberList) {
  let sum = 0;
  for (let i = 0; i < numberList.length; i++) {
    sum += numberList[i];
  }
  console.log("La suma total es: " + sum);
}

sumNumbers(numbers);
sumNumbers(ages);
