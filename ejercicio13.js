//Ejercicio 13

const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

const namesTwo = [
  "Pilar",
  "Vanesa",
  "Robert",
  "Cleo",
  "Olivia",
  "Taylor",
  "Gracie",
];

function nameFinder(nameList, name) {
  const position = nameList.indexOf(name);
  if (position === -1){
    console.log(false, "El elemento no se encuentra en el array");
  }
  else{
    console.log(true, position);
  }
}

nameFinder(names, "Peggy");
nameFinder(namesTwo, "Taylor");
nameFinder(namesTwo, "Swift");
