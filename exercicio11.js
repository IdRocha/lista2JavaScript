let prompt = require('prompt-sync')()
let primeiro = parseInt(prompt("Informe o primeiro valor da P.A "));
let razao = parseInt(prompt('Qual é a razão da P.A? '));

for(let i=1; i<=10; i++){
    let elemento = primeiro + ((i-1)*razao);
    console.log(`O ${i} elemento da P.A é o valor ${elemento} `);
}
