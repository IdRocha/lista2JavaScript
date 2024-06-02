/*Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário. */

let prompt = require('prompt-sync')()

let letra="";
const gabarito = []
const aluno = []
let contador=0;
function geraLetras(){
    letra= Math.floor(Math.random()*2)+1;;

    if(letra===1){
        letra = "A";
    }else if(letra ===2){
        letra = "B";
    }else if(letra===3){
        letra = "C";
    }else{
        letra = "D";
    }
    return letra;
}
for(let i=0; i<20;i++){
    gabarito[i] = geraLetras();
    aluno[i] = geraLetras();
}
for(let k=0;k<20;k++){
    if(gabarito[k] === aluno[k]){
        contador++
    }
}
if(contador>=12){
    console.log(`Aluno Aprovado com ${contador} acertos`);
}else{
    console.log(`Aluno Reprovado com ${contador} acertos`);
}
