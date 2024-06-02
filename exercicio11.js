/* Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência.*/

let prompt = require('prompt-sync')()
let primeiro = parseInt(prompt("Informe o primeiro valor da P.A "));
let razao = parseInt(prompt('Qual é a razão da P.A? '));

for(let i=1; i<=10; i++){
    let elemento = primeiro + ((i-1)*razao);
    console.log(`O ${i} elemento da P.A é o valor ${elemento} `);
}
