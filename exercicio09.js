/*Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário.*/

let prompt = require('prompt-sync')()

let opcao = "S";
let salarioTotalHomens = 0;
let salarioTOtalMulheres = 0;

while(opcao === "S" || opcao === "s"){
    let salario = parseFloat(prompt("Informe o salário: "))
    let sexo = prompt('Informe o sexo do funcionário [h ou H] para homens [m ou M] para mulheres: ');
        if(sexo === "h" || sexo === "H"){
            salarioTotalHomens += salario;
        }else if(sexo ==="m" || sexo ==="M"){
            salarioTOtalMulheres += salario;
        }else{
            console.log("VOcê não escolheu uma opção de sexo válida!");
        }
    opcao = prompt("Pressione s ou S para inserir mais um funcionário: ");
}
console.log(`O salário total dos homens foi de R$ ${salarioTotalHomens.toFixed(2)} `);
console.log(`O salário total das mulheres foi de R$ ${salarioTOtalMulheres.toFixed(2)} `);
