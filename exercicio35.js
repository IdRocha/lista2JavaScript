/*Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias. */

let prompt = require('prompt-sync')();

let matriz = [];
let pares = [];
let impares = [];

for(let i=0; i<30;i++){
    matriz[i] = Math.floor(Math.random()*99)+1;
}
for(let j=0;j<30;j++){
    if(matriz[j] % 2 == 0){
        pares.push(matriz[j]);
        if(pares.length === 5){
            console.log("PARES");
            console.log(pares);
            pares = [];
        }
    }else{
        impares.push(matriz[j]);
        if(impares.length === 5){
            console.log("IMPARES");
            console.log(impares);
            impares = [];
        }
    }
}
console.log("PARES");
console.log(pares);
console.log("IMPARES");
console.log(impares);
