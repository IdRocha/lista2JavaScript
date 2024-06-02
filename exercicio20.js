/*Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS).*/

let prompt = require('prompt-sync')()

const funcionario={
    matricula:"001",
    nome:"José",
    salarioBruto:1850,
    deducao:1850*0.12,
    liquido: function(){
        return this.salarioBruto - this.deducao
    },
    completo: function(){
        return "Matrícula: "+this.matricula+"\nNome: "+this.nome+"\nSalário Bruto: R$ "+this.salarioBruto+"\nDedução INSS: R$ "+this.deducao+"\nSalário Liquido: R$ "+this.liquido()
    }
}

console.log(funcionario.completo())
