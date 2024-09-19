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

const singers = [
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
nameFinder(singers, "Taylor");
nameFinder(singers, "Swift");
