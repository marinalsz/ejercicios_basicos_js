//Ejercicio 7

function greaterNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log(numberOne + " es mayor que " + numberTwo);
  } else if (numberTwo > numberOne) {
    console.log(numberTwo + " es mayor que " + numberOne);
  } else {
    console.log(numberOne + " es igual que " + numberTwo);
  }
}

greaterNumber(900, 92);
greaterNumber(10, 15);
greaterNumber(85, 85);