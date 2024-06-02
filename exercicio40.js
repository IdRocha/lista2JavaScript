/*Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.) */

let prompt = require('prompt-sync')()

let resultado = [1,3,4,6,8];
let apostadores = [], numero=0;
function sorteador(){
    numeroSorteado = Math.floor(Math.random()*8)+1;
    return numeroSorteado;
}
for(let i=0; i<50;i++){
    apostadores[i] = [];
    for(let j=0;j<5;j++){
        if(j===0){
            apostadores[i][j] = sorteador();
        }else{
            numero = sorteador();
            let existe = apostadores[i].includes(numero);      
            while(existe == true){
                numero = sorteador();
                existe = apostadores[i].includes(numero);
            }
            apostadores[i][j] = numero; 
        }
    }
}
let ganhadores =0;
for(let k=0; k<50;k++){
    let acertos = 0;
    apostadores[k].sort((a,b)=>a-b);
    for(let l=0;l<5;l++){
        if(apostadores[k][l] === resultado[l]){
            acertos++;
        }
        if(acertos === 5){
            console.log(`JOGADOR ${k} FOI GANHADOR!!!!`)
            ganhadores++;
        }
    }
}
console.log(`TIVERAM ${ganhadores} GANHADORES!!!`);
