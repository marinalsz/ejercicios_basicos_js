//Ejercicio 12

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

const things = [
  "ordenador",
  "altavoz",
  "teclado",
  "altavoz",
  "calendario",
  "tablero",
  "hoja",
  "ordenador",
];

function removeDuplicates(list) {
  const uniques = [];
  for (const element of list) {
    if (!uniques.includes(element)) {
      uniques.push(element);
    }
  }
  console.log(uniques);
}

removeDuplicates(duplicates);
removeDuplicates(things);
