/*Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5].*/

let prompt = require('prompt-sync')()

const matrizA = [[2,4],[6,8]];
const matrizB = [[2,4],[6,8]];
let produto = [[],[]]

for(let i=0;i<matrizA.length;i++){
    for(let j=0;j<matrizA[i].length;j++){
        produto[i][j] = matrizA[i][j]*matrizB[i][j];

    }
}
console.log(produto);
