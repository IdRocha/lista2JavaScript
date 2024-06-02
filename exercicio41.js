/*Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade. */

let prompt = require('prompt-sync')()

let pessoa = {
    nome: "Idelcio",
    idade: 32
}
console.log(pessoa.idade);
pessoa.email = "idelciorocha@gmail.com";
console.log(pessoa);

