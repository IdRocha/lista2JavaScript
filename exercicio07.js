/*Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km*/

let prompt = require('prompt-sync')()

let carro = prompt('Informe se o carro é popular ou de luxo: ');
let distancia = parseInt(prompt('Informe a distância: '));
let custo = 0;
if(carro === "popular" || carro === "POPULAR"){
    if(distancia <= 100){
        custo = distancia*0.20;
    }else{
        custo = (100*0.20)+((distancia-100)*0.10);
    }
}else if(carro === "luxo" || carro === "LUXO"){
    if(distancia <= 200){
        custo = distancia*0.30;
    }else{
        custo = (200*0.30)+((distancia-200)*0.25);
    }
}else{
    console.log('Você não escolheu nenhuma opção válida!');
}
console.log(`O custo total será de R$ ${custo.toFixed(2)}`);
