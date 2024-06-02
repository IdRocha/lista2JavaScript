/*Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.*/

let prompt = require('prompt-sync')()

function pesoIdeal(altura, sexo){
    if(sexo ==="m" || sexo ==="M"){
        pesoIdeal = (72.7*altura)-58;
    }else if(sexo === "h" || sexo ==="H"){
        pesoIdeal = (62.1*altura)-44.7;
    }else{
        console.log('Sexo inválido!!!');
    }
    return pesoIdeal;
}
pesoIdeal(1.80,"m");
console.log(`O peso ideal é ${pesoIdeal.toFixed(2)} Kg. `);

