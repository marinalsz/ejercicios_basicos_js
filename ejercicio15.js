//Ejercicio 15

const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

for (const product of products) {
  if (product.toLowerCase().includes("Camiseta".toLowerCase())) {
    console.log(product);
  }
}
