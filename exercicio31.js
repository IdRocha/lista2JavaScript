/*Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados.*/

let prompt = require('prompt-sync')();

let matriz = []
let a = parseInt(prompt('Insira um valor'));
let contador =0;
for(let i=0; i<30;i++){
    matriz[i] = [];
    for(let j=0;j<30;j++){
        matriz[i][j] = Math.floor(Math.random()*100);
    }
}
for(let i=0; i<30;i++){
    for(let j=0;j<30;j++){
        if(matriz[i][j] === a){
            contador ++;
        }
    }
}
console.log(matriz);
console.log(`O valor ${a} aparece ${contador} vezes. `);
