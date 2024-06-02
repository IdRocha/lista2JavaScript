/*Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final.*/

let prompt = require('prompt-sync')()

const matriz = [];

let vetor = [];

let a = parseInt(prompt('Informe o multiplicador'));

for(let i=0; i<6;i++){
    matriz[i] = [];
    for(let j=0; j<6;j++){
        matriz[i][j] = Math.floor(Math.random()*100);
        vetor.push(matriz[i][j]*a);
    }
}
console.log(matriz);
console.log(vetor);
