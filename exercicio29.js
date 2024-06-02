/* Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz.*/

let prompt = require('prompt-sync')()

const matriz = [[1,2,3,4,5],
[1,2,3,4,5],
[1,2,3,4,5],
[1,2,3,4,5],
[1,2,3,4,5],];

let linha4=0, coluna2=0, diagP=0, soma=0;

for(let i=0; i<matriz.length;i++){
    for(let j=0; j<matriz[i].length;j++){
        if(i===3){
            linha4 += matriz[i][j];
        }
        if(j===1){
            coluna2 += matriz[i][j];
        }
        if(i===j){
            diagP += matriz[i][j];
        }
        soma += matriz[i][j];
    }
}
console.log(linha4, coluna2, diagP, soma);
