/*Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente.*/

let prompt = require('prompt-sync')()

let matriz = [];
let soma0 = 0, soma1=0,soma2=0,soma3=0,soma4=0,soma5=0,soma6=0,soma7=0,soma8=0,soma9=0,soma10=0,soma11=0,soma12=0,soma13=0,soma14=0;

for(let i=0;i<20;i++){
    matriz[i] = [];
    for(let j=0;j<20;j++){
        matriz[i][j] = Math.floor(Math.random()*100);
    }
}
console.log(matriz)

for(let i=0;i<matriz.length;i++){
    for(let j=0;j<matriz[i].length;j++){
        switch(j){
            case 0:
                soma0 += matriz[i][0];
            break
            case 1:
                soma1 += matriz[i][1]; 
            break
            case 2:
                soma2 += matriz[i][2];
            break
            case 3:
                soma3 += matriz[i][3]; 
            break
            case 4:
                soma4 += matriz[i][4];
            break
            case 5:
                soma5 += matriz[i][5]; 
            break
            case 6:
                soma6 += matriz[i][6];
            break
            case 7:
                soma7 += matriz[i][7]; 
            break
            case 8:
                soma8 += matriz[i][8];
            break
            case 9:
                soma9 += matriz[i][9]; 
            break
            case 10:
                soma10 += matriz[i][10];
            break
            case 11:
                soma11 += matriz[i][11]; 
            break
            case 12:
                soma12 += matriz[i][12];
            break
            case 13:
                soma13 += matriz[i][13]; 
            break
            case 14:
                soma14 += matriz[i][14];
            break
                
      }
    }
}
console.log(soma0, soma1, soma2, soma3,soma4,soma5,soma6,soma7,soma8,soma9,soma10,soma11,soma12,soma13,soma14);
