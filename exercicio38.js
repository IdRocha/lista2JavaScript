/*Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor. */

let prompt = require('prompt-sync')()

let vetor = [];
let soma = 0, media=0, produto=1, repetir=1;
for(let i=0;i<6;i++){
    vetor[i] = Math.floor(Math.random()*99)+1;
}
while(repetir==1){
    let opcao = parseInt(prompt("Selecione a Opção que deseja: \n 1 - Soma dos Elementos\n 2 - Produto dos Elementos\n 3 - Média dos Elementos\n 4 - Ordene os elementos em ordem crescente \n 5 - Mostre o vetor: \n"));
    switch(opcao){
        case 1:
            for(let i=0;i<6;i++){
                soma += vetor[i];
            }
            console.log(`A soma dos elementos é: ${soma}`);
        break;
        case 2:
            media = soma/6;
            console.log(`A média dos elementos é: ${media}`);
            break;
        case 3: 
            for(let i=0;i<6;i++){
                produto *= vetor[i];
            }
            console.log(`O produto dos elementos é: ${produto}`);
            break;
        case 4:
            vetor.sort((a,b) => a-b);
            console.log(vetor);
            break;
        case 5:
            console.log(vetor);
        default:
            console.log("Opção Inválida. ");
    }repetir = parseInt(prompt("Digite 1 para escolher outra operação: "));
}
