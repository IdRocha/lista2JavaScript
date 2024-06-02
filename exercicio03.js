/* Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.*/
let prompt = require('prompt-sync')()

let distancia = parseInt(prompt('Informe a distância que deseja percorrer: '));
let valor = 0;

if(distancia >0 && distancia <=200){
    valor = distancia*0.50;
}else if(distancia >200){
    valor = (200*0.50) + ((distancia-200)*0.45);
}else{
    console.log('Você informou uma distância inválida!!!')
}
console.log(`Sua viagem de ${distancia} km's irá custar R$ ${valor.toFixed(2)}`);
