/*Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci.*/

let prompt = require('prompt-sync')()

let fib = []
let soma = 0;
for(let i =0; i<=14; i++){
    if(i === 0 || i ===1){
        fib[i] = 1;
    }else{
        fib[i] = fib[i-2] + fib[i-1];
    }
    soma += fib[i];
}
console.log(fib)
