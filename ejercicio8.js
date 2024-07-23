// Ejercicio 8

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

const footballers = [
  "Nico",
  "Alexia",
  "Pedri",
  "Fridolina",
  "Declan",
  "Mariona",
];

function findLongestWord(stringList) {
  let longestWord = "";
  for (const element of stringList) {
    if (element.length > longestWord.length) {
      longestWord = element;
    }
  }
  console.log(longestWord);
}

findLongestWord(avengers);
findLongestWord(footballers);
