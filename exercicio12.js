/* Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21.*/

let prompt = require('prompt-sync')()

let fib = []
let soma = 0;
for(let i =0; i<=9; i++){
    if(i === 0 || i ===1){
        fib[i] = 1;
    }else{
        fib[i] = fib[i-2] + fib[i-1];
    }
    soma += fib[i];
}
console.log(fib)
console.log(`A soma dos elementos é ${soma}`);
