/*Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS.*/

let prompt = require('prompt-sync')()

for(let i=0;i<4;i++){
    let hora = parseInt(prompt('Informe a hora: '));
    let minutos = parseInt(prompt('Informe os minutos: '));
    let segundos = parseInt(prompt('Informe os segundos: '));
    if(hora>=0 & hora<24 & minutos>=0 & minutos<60 & segundos >=0 & segundos<60){
        console.log(hora,':',minutos,':',segundos);
    }else{
        console.log('Informações incorretas');
    }
}
