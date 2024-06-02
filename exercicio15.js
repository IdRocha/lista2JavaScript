let prompt = require('prompt-sync')()

let vetor = [];
for(let i=0; i<10; i++){
    vetor[i] = parseInt(prompt('Informe um valor inteiro: '));
}
for( let i=0; i<10; i++){
    if(vetor[i] % 2 === 0){
        console.log(`Posição ${i} valor ${vetor[i]}`);

    }
}
