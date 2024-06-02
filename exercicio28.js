/*Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal;*/

let prompt = require('prompt-sync')()

let matriz = [];
let somaAcima = 0;
let somaAbaixo = 0;

for(let i=0; i<10;i++){
    matriz[i] = [];
    for(let j=0; j<10; j++){
        matriz[i][j] = Math.floor(Math.random()*100);
        if(i<j){
            somaAcima += matriz[i][j];
        }else if(i>j){
            somaAbaixo += matriz[i][j];
        }
    }
}
console.log(`A soma dos valores acima da diagonal principal é ${somaAcima}`);
console.log(`A soma dos valores abaixo da diagonal principal é ${somaAbaixo}`);
