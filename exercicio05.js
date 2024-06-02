/*Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).*/

let prompt = require('prompt-sync')()

let opcao = 1;

while(opcao === 1){
    let escolhaComputador =Math.floor(Math.random()*3)+1;
    let escolhaJogador = parseInt(prompt('ESCOLHA SUA JOGADA: \n [1] - PEDRA \n [2] - PAPEL \n [3] - TESOURA \n'));
    if(escolhaComputador === escolhaJogador){
        console.log("EMPATE");
    }else if(escolhaComputador === 1 && escolhaJogador === 2){
        console.log('JOGADOR VENCEU!!!');
    }else if(escolhaComputador === 2 && escolhaJogador === 1){
        console.log('COMPUTADOR VENCEU!!!');
    }else if(escolhaComputador === 1 && escolhaJogador === 3){
        console.log('COMPUTADOR VENCEU!!!');
    }else if(escolhaComputador ===3 && escolhaJogador === 1){
        console.log('JOGADOR VENCEU!!!');
    }else if(escolhaComputador ===2 && escolhaJogador ===3){
        console.log('JOGADOR VENCEU!!!');
    }else{
        console.log('COMPUTADOR VENCEU!!!');
    }
    opcao = parseInt(prompt('Digite 1 para jogar novamente. '))
}
