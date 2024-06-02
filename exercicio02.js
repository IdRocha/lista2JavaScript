/*Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.*/

let prompt = require('prompt-sync')()

let velocidade = parseInt(prompt("Qual é a velocidade do carro? "));
let multa = 0;

if(velocidade>80){
    multa = (velocidade-80)*5;
    console.log("Você está acima do limite de velocidade!!!! ");
    console.log(`Sua multa será de R$ ${multa.toFixed(2)}`);
}else{
    console.log("Você está dentro do limite de velocidade. ")
}
