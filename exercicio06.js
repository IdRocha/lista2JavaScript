/*Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado.*/

let prompt = require('prompt-sync')()

let escolha = parseInt(prompt('Escolha um número de 1 a 5: '));
let numero =Math.floor(Math.random()*5)+1;

if(escolha === numero){
    console.log('Você acertou')
}else{
    console.log(`Você errou o número correto é: ${numero}`)
}
