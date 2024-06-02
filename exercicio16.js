/*Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.*/

let prompt = require('prompt-sync')()

let vetor = []
let aux =0;
for(let i=0; i<20; i++){
    vetor[i] = Math.floor(Math.random()*100);
}

vetor.sort((a,b) => a-b);

console.log(vetor);
