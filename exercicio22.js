/*A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a

média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00.*/

let prompt = require('prompt-sync')()

let vetorSal = []
let vetorF=[]
let opcao = 1;
while(opcao == 1){
function soma(salario,numFilhos){
    vetorSal.push(salario);
    vetorF.push(numFilhos); 
}
let salario = parseInt(prompt('Digite o salario: '));
let numFilhos = parseInt(prompt('Digite o numero de filhos:  '));
soma(salario,numFilhos);
opcao = parseInt(prompt('Digite 1 para inserir novos dados. '));
}
let soma = 0;
let somaF = 0;
let maiorSal = 0;
let baixaRenda = 0;
for(let k=0;k<vetorSal.length;k++){
    soma += vetorSal[k];
    somaF += vetorF[k]
    if(vetorSal[k]>maiorSal){
        maiorSal = vetorSal[k];
    }
    if(vetorSal[k]<=350){
        baixaRenda ++;
    }
}
let media = soma/vetorSal.length;
let mediaF = somaF/vetorF.length;
let percBaixaRenda = (baixaRenda/vetorSal.length)*100;

console.log(vetorSal, vetorF);
console.log(`A media salarial é R$ ${media.toFixed(2)}`);
console.log(`A media de filhos é ${mediaF.toFixed(1)} filhos`);
console.log(`O maior salario é R$ ${maiorSal}`);
console.log(`O percentual de pessoas com renda inferior a R$ 350 é ${percBaixaRenda.toFixed(2)}%`);

