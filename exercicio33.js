/*Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária. */

let prompt = require('prompt-sync')()

let matriz = [];

for(let i=0;i<3;i++){
    matriz[i] = [];
    for(let j=0;j<3;j++){
        matriz[i][j] = Math.floor(Math.random()*100);
        
    }
}
let somaSecundaria = matriz[0][2] + matriz[1][1] + matriz[2][0];
let mediaSecundaria = somaSecundaria/3;
console.log('MATRIZ ORIGINAL');
console.log(matriz);
console.log(`Média da diagonal secundária: ${mediaSecundaria.toFixed(2)}`);
for(let k=0;k<3;k++){
    for(let l=0;l<3;l++){
        if(k===l){
            matriz[k][l] = matriz[k][l]*mediaSecundaria.toFixed(2);
        }
    }
}

console.log('MATRIZ MODIFICADA');
console.log(matriz);
