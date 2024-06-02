/*Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos. */

let prompt = require('prompt-sync')()

const obj1={
    fabricante: "BMW",
    modelo: "X1",
    ano: 2011
}
const obj2={
    marca: "Volkswagen",
    modelo: "Polo"
}
let obj3={};
function unir(){
    obj3 = Object.assign(obj1, obj2);
    return obj3;
}
console.log(unir());
