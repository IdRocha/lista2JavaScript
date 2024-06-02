/*Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada. */

let prompt = require('prompt-sync')()

let matriz = [], matrizMod = [];
let maior =[1,1,1,1,1,1,1,1,1,1,1,1];
for(let i=0;i<12;i++){
    matriz[i] = [];
    for(let j=0;j<13;j++){
        matriz[i][j] = Math.floor(Math.random()*10)+1;
    }
}
for(let k=0;k<12;k++){
    for(let l=0;l<13;l++){
        if(matriz[k][l]>maior[k]){
            maior[k] = matriz[k][l];
        }
    }
}
for(let m=0;m<12;m++){
    matrizMod[m] = [];
    for(let n=0;n<13;n++){
        matrizMod[m][n] = matriz[m][n]/maior[m];
    }
}
console.log(matriz);
console.log(matrizMod);

