/*Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR". */

let prompt = require('prompt-sync')()

let gabarito = [1,2,3,5,7,8,9,11,12,13,14,15,16];
let jogadores = []
let numeroSorteado =0, numero=0;
function sorteador(){
    numeroSorteado = Math.floor(Math.random()*16+1);
    return numeroSorteado;
}
for(let i=0;i<100;i++){
    jogadores[i] = [];
    for(let j=0;j<13;j++){
       if(j===0){
        jogadores[i][j] = sorteador();
       }else{
            numero = sorteador();
            let existe = jogadores[i].includes(numero);      
            while(existe == true){
                numero = sorteador();
                existe = jogadores[i].includes(numero);
            }
            jogadores[i][j] = numero;       
       }
    }
}
let ganhadores =0,acertos=0;
for(let l=0;l<100;l++){
    acertos =0;
    jogadores[l].sort((a,b) => a-b);
    for(let k=0;k<13;k++){
        if(jogadores[l][k]===gabarito[k]){
            acertos++;
        }
        if(acertos === 13){
            console.log(`PARABENS!!! O JOGADOR ${l} FOI O GANHADOR!!!!!!`);
            ganhadores++;
        }
    }
   
}

console.log(`Tivemos ${ganhadores} ganhadores`);
