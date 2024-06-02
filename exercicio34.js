/*Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações. */

let prompt = require('prompt-sync')()

let matriz = [], matrizMod = [];
let diagonalP = [];

for(let i=0;i<4;i++){
    matriz[i] = [];
    for(let j=0;j<4;j++){
        matriz[i][j] = Math.floor(Math.random()*50)+1;
    }
}
for(let k=0;k<4;k++){
   for(let l=0; l<4;l++){
    if(k===l){
        diagonalP[l] = matriz[k][l];
    }
   }
}
for(let m=0;m<4;m++){
    matrizMod[m] = [];
    for(let n=0;n<4;n++){
        matrizMod[m][n] = matriz[m][n]*diagonalP[m];
    }
}

console.log(matriz);
console.log(diagonalP);
console.log(matrizMod);
