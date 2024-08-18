//Ejercicio 14

const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];

const wordsTwo = [
  "sea",
  "main",
  "bear",
  "finger",
  "bear",
  "joy",
  "bear",
  "sea",
  "new",
];

function repeatCounter(list) {
  const result = {};
  for (const element of list) {
    if (result[element]) {
      result[element] += 1;
    } else {
      result[element] = 1;
    }
  }
  console.log(result);
}

repeatCounter(words);
repeatCounter(wordsTwo);
