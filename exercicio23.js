/*Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos.*/

let prompt = require('prompt-sync')()

let matriz = []
const n = parseInt(prompt('Informe o tamanho da matriz identidade: '));

for(let i=0;i<n;i++){
    matriz[i] = [];
    for(let j=0;j<n;j++){
        if(i === j){
            matriz[i][j] = 1;
        }else{
            matriz[i][j] = 0;
        }
    }
}
console.log(matriz);
