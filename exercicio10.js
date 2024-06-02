/*Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.*/

let prompt = require('prompt-sync')()

let somatorio = 0;
let menor = 0;
let opcao = "";
let contador = 0;
let contPares = 0;
do{
    let valor = parseFloat(prompt("Insira o valor: "));
    somatorio += valor;
    contador ++;
    if(valor % 2 ===0){
        contPares ++;
    }
    if(contador === 1){
        menor = valor;
    }else{
        if(valor < menor){
            menor = valor;
        }
    }
    opcao = prompt("Digite S ou s para continuar. ")
}while(opcao === "s" || opcao ==="S");

let media = somatorio/contador;
console.log(`O somatório dos valores foi de: ${somatorio}`);
console.log(`O menor valor digitado foi ${menor}`);
console.log(`A média dos valores digitados foi de: ${media}`);
console.log(`O total de numeros pares foi de: ${contPares}`);
