/*Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.*/

let prompt = require('prompt-sync')()

let tempo = parseInt(prompt("Informe a quantidade de horas: "));
let pontos = 0;
if(tempo<=10){
    pontos = tempo * 2;  
}else if(tempo>10 && tempo <= 20){
    pontos = (10*2) + ((tempo-10)*5);
}else{
    pontos = (10*2) + (10*5) + ((tempo-20)*10);
}
let premio = pontos * 0.05;
console.log(`Você conquistou ${pontos} pontos. `)
console.log(`Você irá receber R$ ${premio.toFixed(2)} de prêmio. `);
