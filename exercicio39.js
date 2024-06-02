/*Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B. */

let prompt = require('prompt-sync')()

let vetorA = [], vetorB = [];
for(let i=0; i<30;i++){
    vetorA[i] = Math.floor(Math.random()*(99-(-99)))-99;
}
for(let j=0;j<30;j++){
    if(vetorA[j]>0){
        vetorB.push(vetorA[j]);
    }
}
console.log("VETOR A: \n" + vetorA);
console.log("VETOR B: \n" + vetorB);
