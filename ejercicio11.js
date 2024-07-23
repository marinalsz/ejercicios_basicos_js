//Ejercicio 11

const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
const randomList = ['Carlos', 8, 'gorra', 2, 'dado', 'Paula', 10];

function averageWord(list) {
    let sum = 0;
    for (const element of list) {
        if(typeof element === "number"){
            sum += element;
        }
        else{
            sum += element.length;
        }
    }
    const result = sum / list.length;
    return result;
}

const result1 = averageWord(mixedElements);
console.log("El resultado es: " + result1);

const result2 = averageWord(randomList);
console.log("El resultado es: " + result2);
