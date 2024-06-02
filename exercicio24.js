/*Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.*/

let prompt = require('prompt-sync')()

const matriz =[]
let vetor=[]
let contNeg=0,contNeg1=0,contNeg2=0,contNeg3=0,contNeg4=0,contNeg5=0;

for(let i=0;i<6;i++){
    matriz[i] = [];
    for(let j=0;j<8;j++){
        matriz[i][j] = Math.floor(Math.random()*(99-(-99)))-99;
    }
}
for(let k=0;k<6;k++){
    for(let l=0;l<8;l++){
        switch(k){
            case 0:
                if(matriz[0][l]<0){
                    contNeg++;
                }
                vetor[0] = contNeg;
                break;
            case 1:
                if(matriz[1][l]<0){
                    contNeg1++;
                }
                vetor[1] = contNeg1;
                break;
            case 2:
                if(matriz[2][l]<0){
                    contNeg2++;
                }
                vetor[2] = contNeg2;
                break;
            case 3:
                if(matriz[3][l]<0){
                    contNeg3++;
                }
                vetor[3] = contNeg3;
                break;
            case 4:
                if(matriz[4][l]<0){
                    contNeg4++;
                }
                vetor[4] = contNeg4;
                break;
            case 5:
                if(matriz[5][l]<0){
                    contNeg5++;
                }
                vetor[5] = contNeg5;
                break
        }
    }
}
console.log(matriz);
console.log(vetor);
