/*Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número. */

let prompt = require('prompt-sync')()

let pessoa = {
    nome: "Idelcio",
    idade: 32,
    sexo: "Masculino",
    hobbies: new Array()
}
for(let atri in pessoa){
    console.log(typeof(atri));
}
console.log(typeof(pessoa.idade));
