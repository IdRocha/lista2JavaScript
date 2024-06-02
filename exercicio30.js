/*Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados.*/

let prompt = require('prompt-sync')()

let matriz = [];
let sl = [0,0,0,0,0];
let sc = [0,0,0,0,0];
let somaL =0, somaC=0;

for(let i=0;i<5;i++){
    matriz[i] = [];
    for(let j=0;j<5;j++){
        matriz[i][j] = Math.floor(Math.random()*100);
    }
}
for(let j=0;j<matriz.length;j++){
    for(let k=0; k<matriz[j].length;k++){
        if(k===0){
            sc[0] += matriz[j][0];
        }else if(k===1){
            sc[1] += matriz[j][1];
        }else if(k===2){
            sc[2] += matriz[j][2];
        }else if(k===3){
            sc[3] += matriz[j][3];
        }else if(k===4){
            sc[4] += matriz[j][4];
        }
        if(j===0){
            sl[0] += matriz[0][k];
        }else if(j===1){
            sl[1] += matriz[1][k];
        }else if(j===2){
            sl[2] += matriz[2][k];
        }else if(j===3){
            sl[3] += matriz[3][k];
        }else if(j===4){
            sl[4] += matriz[4][k];
        }
    }
}

console.log(matriz);
console.log(`A soma das Linhas é: ${sl}`);
console.log(`A soma das Colunas é: ${sc}`);
