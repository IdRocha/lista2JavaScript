/*Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.*/

let prompt = require('prompt-sync')()

let nome = [9];
let idade = [9];

for(let i=0;i<9;i++){
    nome[i] = prompt('Digite o nome: ');
    idade[i] = parseInt(prompt('Informe a idade: '));
}
console.log('Menores de idade');
for(let j=0;j<9;j++){
    if(idade[j]<18){ 
        console.log(`${nome[j]} tem ${idade[j]} anos`);
    }
}

