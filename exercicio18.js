/*Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro.*/

let prompt = require('prompt-sync')()

const funcionario = {
    nome: "José",
    cargo: "Gerente",
    salario: 6000
}
for(let func in funcionario){
    console.log(funcionario[func]);
}
