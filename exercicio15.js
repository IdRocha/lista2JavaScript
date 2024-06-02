/*Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados.*/

let prompt = require('prompt-sync')()

let vetor = [];
for(let i=0; i<10; i++){
    vetor[i] = parseInt(prompt('Informe um valor inteiro: '));
}
for( let i=0; i<10; i++){
    if(vetor[i] % 2 === 0){
        console.log(`Posição ${i} valor ${vetor[i]}`);

    }
}
