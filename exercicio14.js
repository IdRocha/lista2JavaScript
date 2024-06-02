let prompt = require('prompt-sync')()

let nomes = [];

for(let i=0; i<7; i++){
    nomes[i] = prompt('Digite um nome: ')
}
for( let i=6; i>=0; i--){
    console.log(nomes[i]);
}
