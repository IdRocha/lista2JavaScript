/*Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.*/

let prompt = require('prompt-sync')()

let a = parseInt(prompt('Informe o tamanho do primeiro segmento de reta: '));
let b = parseInt(prompt('Informe o tamanho do segundo segmento de reta: '));
let c = parseInt(prompt('Informe o tamanho do terceiro segmento de reta: '));

if(a < b+c && b < a+c && c < a+b){
    console.log('É possivel formar um triângulo. ')
}else{
    console.log('Não é possivel formar um triângulo. ')
}
