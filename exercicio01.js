/* Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.*/

let prompt = require('prompt-sync')()

let cigarros = parseInt(prompt("Quantos cigarros você fuma por dia? "));
let anos = parseInt(prompt("Você fuma a quantos anos? "));
let totalCigarros = (anos*365)*cigarros;
let tempoMinutos = totalCigarros*10;
let tempoDias = Math.floor(tempoMinutos/1440);
console.log(`Você perderá ${tempoDias} dias de vida. `);
