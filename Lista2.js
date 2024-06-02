let prompt = require('prompt-sync')()

//Exercicio 16  
/*let vetor = []
let aux =0;
for(let i=0; i<20; i++){
    vetor[i] = Math.floor(Math.random()*100);
}

vetor.sort((a,b) => a-b);

console.log(vetor);
*/



//Exercicio 17
/*let nome = [9];
let idade = [9];

for(let i=0;i<9;i++){
    nome[i] = prompt('Digite o nome: ');
    idade[i] = parseInt(prompt('Informe a idade: '));
}
for(let j=0;j<9;j++){
    if(idade[j]<18){
        console.log(nome[j]);
        console.log(idade[j]);

    }
}
*/




//Exercicio 18  
/*const funcionario = {
    nome: "José",
    cargo: "Gerente",
    salario: 6000
}
for(let func in funcionario){
    console.log(funcionario[func]);
}
*/



//Exercicio 19
/*for(let i=0;i<4;i++){
    let hora = parseInt(prompt('Informe a hora: '));
    let minutos = parseInt(prompt('Informe os minutos: '));
    let segundos = parseInt(prompt('Informe os segundos: '));
    if(hora>=0 & hora<24 & minutos>=0 & minutos<60 & segundos >=0 & segundos<60){
        console.log(hora,':',minutos,':',segundos);
    }else{
        console.log('Informações incorretas');
    }
}
*/




//Exercicio 20  
/*const funcionario={
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
*/




//Exercicio 21 
/*function pesoIdeal(altura, sexo){
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
*/




//Exercicio 22
/*let vetorSal = []
let vetorF=[]
let opcao = 1;
while(opcao == 1){
function soma(salario,numFilhos){
    vetorSal.push(salario);
    vetorF.push(numFilhos); 
}
let salario = parseInt(prompt('Digite o salario: '));
let numFilhos = parseInt(prompt('Digite o numero de filhos:  '));
soma(salario,numFilhos);
opcao = parseInt(prompt('Digite 1 para inserir novos dados. '));
}
let soma = 0;
let somaF = 0;
let maiorSal = 0;
let baixaRenda = 0;
for(let k=0;k<vetorSal.length;k++){
    soma += vetorSal[k];
    somaF += vetorF[k]
    if(vetorSal[k]>maiorSal){
        maiorSal = vetorSal[k];
    }
    if(vetorSal[k]<=350){
        baixaRenda ++;
    }
}
let media = soma/vetorSal.length;
let mediaF = somaF/vetorF.length;
let percBaixaRenda = (baixaRenda/vetorSal.length)*100;

console.log(vetorSal, vetorF);
console.log(`A media salarial é R$ ${media.toFixed(2)}`);
console.log(`A media de filhos é ${mediaF.toFixed(1)} filhos`);
console.log(`O maior salario é R$ ${maiorSal}`);
console.log(`O percentual de pessoas com renda inferior a R$ 350 é ${percBaixaRenda.toFixed(2)}%`);
*/





//Exercicio 23
/*let matriz = []
const n = parseInt(prompt('Informe o tamanho da matriz identidade: '));

for(let i=0;i<n;i++){
    matriz[i] = [];
    for(let j=0;j<n;j++){
        if(i === j){
            matriz[i][j] = 1;
        }else{
            matriz[i][j] = 0;
        }
    }
}
console.log(matriz);
*/



//Exercicio 24
/*const matriz =[]
let vetor=[]
let contNeg=0,contNeg1=0,contNeg2=0,contNeg3=0,contNeg4=0,contNeg5=0;

for(let i=0;i<6;i++){
    matriz[i] = [];
    for(let j=0;j<8;j++){
        matriz[i][j] = Math.floor(Math.random()*(99-(-99)))-99;
    }
}
for(let k=0;k<6;k++){
    for(let l=0;l<8;l++){
        switch(k){
            case 0:
                if(matriz[0][l]<0){
                    contNeg++;
                }
                vetor[0] = contNeg;
                break;
            case 1:
                if(matriz[1][l]<0){
                    contNeg1++;
                }
                vetor[1] = contNeg1;
                break;
            case 2:
                if(matriz[2][l]<0){
                    contNeg2++;
                }
                vetor[2] = contNeg2;
                break;
            case 3:
                if(matriz[3][l]<0){
                    contNeg3++;
                }
                vetor[3] = contNeg3;
                break;
            case 4:
                if(matriz[4][l]<0){
                    contNeg4++;
                }
                vetor[4] = contNeg4;
                break;
            case 5:
                if(matriz[5][l]<0){
                    contNeg5++;
                }
                vetor[5] = contNeg5;
                break
        }
    }
}
console.log(matriz);
console.log(vetor);
*/




//Exercicio 25
/*let matriz = [];
let soma0 = 0, soma1=0,soma2=0,soma3=0,soma4=0,soma5=0,soma6=0,soma7=0,soma8=0,soma9=0,soma10=0,soma11=0,soma12=0,soma13=0,soma14=0;

for(let i=0;i<20;i++){
    matriz[i] = [];
    for(let j=0;j<20;j++){
        matriz[i][j] = Math.floor(Math.random()*100);
    }
}
console.log(matriz)

for(let i=0;i<matriz.length;i++){
    for(let j=0;j<matriz[i].length;j++){
        switch(j){
            case 0:
                soma0 += matriz[i][0];
            break
            case 1:
                soma1 += matriz[i][1]; 
            break
            case 2:
                soma2 += matriz[i][2];
            break
            case 3:
                soma3 += matriz[i][3]; 
            break
            case 4:
                soma4 += matriz[i][4];
            break
            case 5:
                soma5 += matriz[i][5]; 
            break
            case 6:
                soma6 += matriz[i][6];
            break
            case 7:
                soma7 += matriz[i][7]; 
            break
            case 8:
                soma8 += matriz[i][8];
            break
            case 9:
                soma9 += matriz[i][9]; 
            break
            case 10:
                soma10 += matriz[i][10];
            break
            case 11:
                soma11 += matriz[i][11]; 
            break
            case 12:
                soma12 += matriz[i][12];
            break
            case 13:
                soma13 += matriz[i][13]; 
            break
            case 14:
                soma14 += matriz[i][14];
            break
                
      }
    }
}
console.log(soma0, soma1, soma2, soma3,soma4,soma5,soma6,soma7,soma8,soma9,soma10,soma11,soma12,soma13,soma14);
*/



//Exercicio 26
/*const matrizA = [[2,4],[6,8]];
const matrizB = [[2,4],[6,8]];
let produto = [[],[]]

for(let i=0;i<matrizA.length;i++){
    for(let j=0;j<matrizA[i].length;j++){
        produto[i][j] = matrizA[i][j]*matrizB[i][j];

    }
}
console.log(produto);
*/

//Exercicio 27
/*const matriz = [];

let vetor = [];

let a = parseInt(prompt('Informe o multiplicador'));

for(let i=0; i<6;i++){
    matriz[i] = [];
    for(let j=0; j<6;j++){
        matriz[i][j] = Math.floor(Math.random()*100);
        vetor.push(matriz[i][j]*a);
    }
}
console.log(matriz);
console.log(vetor);
*/



//Exercicio 28
/*let matriz = [];
let somaAcima = 0;
let somaAbaixo = 0;

for(let i=0; i<10;i++){
    matriz[i] = [];
    for(let j=0; j<10; j++){
        matriz[i][j] = Math.floor(Math.random()*100);
        if(i<j){
            somaAcima += matriz[i][j];
        }else if(i>j){
            somaAbaixo += matriz[i][j];
        }
    }
}
console.log(`A soma dos valores acima da diagonal principal é ${somaAcima}`);
console.log(`A soma dos valores abaixo da diagonal principal é ${somaAbaixo}`);
*/

//Exercicio 29
/*const matriz = [[1,2,3,4,5],
[1,2,3,4,5],
[1,2,3,4,5],
[1,2,3,4,5],
[1,2,3,4,5],];

let linha4=0, coluna2=0, diagP=0, soma=0;

for(let i=0; i<matriz.length;i++){
    for(let j=0; j<matriz[i].length;j++){
        if(i===3){
            linha4 += matriz[i][j];
        }
        if(j===1){
            coluna2 += matriz[i][j];
        }
        if(i===j){
            diagP += matriz[i][j];
        }
        soma += matriz[i][j];
    }
}
console.log(linha4, coluna2, diagP, soma);
*/



//Exercicio 30  
/*let matriz = [];
let sl = [0,0,0,0,0];
let sc = [0,0,0,0,0];
let somaL =0, somaC=0;

for(let i=0;i<5;i++){
    matriz[i] = [];
    for(let j=0;j<5;j++){
        matriz[i][j] = Math.floor(Math.random()*100);
    }
}
for(let j=0;j<matriz.length;j++){
    for(let k=0; k<matriz[j].length;k++){
        if(k===0){
            sc[0] += matriz[j][0];
        }else if(k===1){
            sc[1] += matriz[j][1];
        }else if(k===2){
            sc[2] += matriz[j][2];
        }else if(k===3){
            sc[3] += matriz[j][3];
        }else if(k===4){
            sc[4] += matriz[j][4];
        }
        if(j===0){
            sl[0] += matriz[0][k];
        }else if(j===1){
            sl[1] += matriz[1][k];
        }else if(j===2){
            sl[2] += matriz[2][k];
        }else if(j===3){
            sl[3] += matriz[3][k];
        }else if(j===4){
            sl[4] += matriz[4][k];
        }
    }
}

console.log(matriz);
console.log(`A soma das Linhas é: ${sl}`);
console.log(`A soma das Colunas é: ${sc}`);
*/




//Exercicio 31
/*let matriz = []
let a = parseInt(prompt('Insira um valor'));
let contador =0;
for(let i=0; i<30;i++){
    matriz[i] = [];
    for(let j=0;j<30;j++){
        matriz[i][j] = Math.floor(Math.random()*100);
    }
}
for(let i=0; i<30;i++){
    for(let j=0;j<30;j++){
        if(matriz[i][j] === a){
            contador ++;
        }
    }
}
console.log(matriz);
console.log(`O valor ${a} aparece ${contador} vezes. `);
*/




//Exercicio 32
/*let matriz = [], matrizMod = [];
let maior =[1,1,1,1,1,1,1,1,1,1,1,1];
for(let i=0;i<12;i++){
    matriz[i] = [];
    for(let j=0;j<13;j++){
        matriz[i][j] = Math.floor(Math.random()*10)+1;
    }
}
for(let k=0;k<12;k++){
    for(let l=0;l<13;l++){
        if(matriz[k][l]>maior[k]){
            maior[k] = matriz[k][l];
        }
    }
}
for(let m=0;m<12;m++){
    matrizMod[m] = [];
    for(let n=0;n<13;n++){
        matrizMod[m][n] = matriz[m][n]/maior[m];
    }
}
console.log(matriz);
console.log(matrizMod);
*/




//Exercicio 33
/*let matriz = [];

for(let i=0;i<3;i++){
    matriz[i] = [];
    for(let j=0;j<3;j++){
        matriz[i][j] = Math.floor(Math.random()*100);
        
    }
}
let somaSecundaria = matriz[0][2] + matriz[1][1] + matriz[2][0];
let mediaSecundaria = somaSecundaria/3;
console.log('MATRIZ ORIGINAL');
console.log(matriz);
console.log(`Média da diagonal secundária: ${mediaSecundaria.toFixed(2)}`);
for(let k=0;k<3;k++){
    for(let l=0;l<3;l++){
        if(k===l){
            matriz[k][l] = matriz[k][l]*mediaSecundaria.toFixed(2);
        }
    }
}

console.log('MATRIZ MODIFICADA');
console.log(matriz);
*/




//Exercicio 34 
/*let matriz = [], matrizMod = [];
let diagonalP = [];

for(let i=0;i<4;i++){
    matriz[i] = [];
    for(let j=0;j<4;j++){
        matriz[i][j] = Math.floor(Math.random()*50)+1;
    }
}
for(let k=0;k<4;k++){
   for(let l=0; l<4;l++){
    if(k===l){
        diagonalP[l] = matriz[k][l];
    }
   }
}
for(let m=0;m<4;m++){
    matrizMod[m] = [];
    for(let n=0;n<4;n++){
        matrizMod[m][n] = matriz[m][n]*diagonalP[m];
    }
}

console.log(matriz);
console.log(diagonalP);
console.log(matrizMod);
*/




//Exercicio 35
/*let matriz = [];
let pares = [];
let impares = [];

for(let i=0; i<30;i++){
    matriz[i] = Math.floor(Math.random()*99)+1;
}
for(let j=0;j<30;j++){
    if(matriz[j] % 2 == 0){
        pares.push(matriz[j]);
        if(pares.length === 5){
            console.log("PARES");
            console.log(pares);
            pares = [];
        }
    }else{
        impares.push(matriz[j]);
        if(impares.length === 5){
            console.log("IMPARES");
            console.log(impares);
            impares = [];
        }
    }
}
console.log("PARES");
console.log(pares);
console.log("IMPARES");
console.log(impares);
*/




//Exercicio 36 
/*let gabarito = [1,2,3,5,7,8,9,11,12,13,14,15,16];
let jogadores = []
let numeroSorteado =0, numero=0;
function sorteador(){
    numeroSorteado = Math.floor(Math.random()*16+1);
    return numeroSorteado;
}
for(let i=0;i<100;i++){
    jogadores[i] = [];
    for(let j=0;j<13;j++){
       if(j===0){
        jogadores[i][j] = sorteador();
       }else{
            numero = sorteador();
            let existe = jogadores[i].includes(numero);      
            while(existe == true){
                numero = sorteador();
                existe = jogadores[i].includes(numero);
            }
            jogadores[i][j] = numero;       
       }
    }
}
let ganhadores =0,acertos=0;
for(let l=0;l<100;l++){
    acertos =0;
    jogadores[l].sort((a,b) => a-b);
    for(let k=0;k<13;k++){
        if(jogadores[l][k]===gabarito[k]){
            acertos++;
        }
        if(acertos === 13){
            console.log(`PARABENS!!! O JOGADOR ${l} FOI O GANHADOR!!!!!!`);
            ganhadores++;
        }
    }
   
}

console.log(`Tivemos ${ganhadores} ganhadores`);
*/




//Exercicio 37
/*let letra="";
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
*/



//Exercicio 38
/*let vetor = [];
let soma = 0, media=0, produto=1, repetir=1;
for(let i=0;i<6;i++){
    vetor[i] = Math.floor(Math.random()*99)+1;
}
while(repetir==1){
    let opcao = parseInt(prompt("Selecione a Opção que deseja: \n 1 - Soma dos Elementos\n 2 - Produto dos Elementos\n 3 - Média dos Elementos\n 4 - Ordene os elementos em ordem crescente \n 5 - Mostre o vetor: \n"));
    switch(opcao){
        case 1:
            for(let i=0;i<6;i++){
                soma += vetor[i];
            }
            console.log(`A soma dos elementos é: ${soma}`);
        break;
        case 2:
            media = soma/6;
            console.log(`A média dos elementos é: ${media}`);
            break;
        case 3: 
            for(let i=0;i<6;i++){
                produto *= vetor[i];
            }
            console.log(`O produto dos elementos é: ${produto}`);
            break;
        case 4:
            vetor.sort((a,b) => a-b);
            console.log(vetor);
            break;
        case 5:
            console.log(vetor);
        default:
            console.log("Opção Inválida. ");
    }repetir = parseInt(prompt("Digite 1 para escolher outra operação: "));
}
*/



//Exercicio 39
/*let vetorA = [], vetorB = [];
for(let i=0; i<30;i++){
    vetorA[i] = Math.floor(Math.random()*(99-(-99)))-99;
}
for(let j=0;j<30;j++){
    if(vetorA[j]>0){
        vetorB.push(vetorA[j]);
    }
}
console.log("VETOR A: \n" + vetorA);
console.log("VETOR B: \n" + vetorB);
*/



//Exercicio 40
/*let resultado = [1,3,4,6,8];
let apostadores = [], numero=0;
function sorteador(){
    numeroSorteado = Math.floor(Math.random()*8)+1;
    return numeroSorteado;
}
for(let i=0; i<50;i++){
    apostadores[i] = [];
    for(let j=0;j<5;j++){
        if(j===0){
            apostadores[i][j] = sorteador();
        }else{
            numero = sorteador();
            let existe = apostadores[i].includes(numero);      
            while(existe == true){
                numero = sorteador();
                existe = apostadores[i].includes(numero);
            }
            apostadores[i][j] = numero; 
        }
    }
}
let ganhadores =0;
for(let k=0; k<50;k++){
    let acertos = 0;
    apostadores[k].sort((a,b)=>a-b);
    for(let l=0;l<5;l++){
        if(apostadores[k][l] === resultado[l]){
            acertos++;
        }
        if(acertos === 5){
            console.log(`JOGADOR ${k} FOI GANHADOR!!!!`)
            ganhadores++;
        }
    }
}
console.log(`TIVERAM ${ganhadores} GANHADORES!!!`);
*/



//Exercicio 41
/*let pessoa = {
    nome: "Idelcio",
    idade: 32
}
console.log(pessoa.idade);
pessoa.email = "idelciorocha@gmail.com";
console.log(pessoa);
*/



//Exercicio 43
/*const obj1={
    fabricante: "BMW",
    modelo: "X1",
    ano: 2011
}
const obj2={
    marca: "Volkswagen",
    modelo: "Polo"
}
let obj3={};
function unir(){
    obj3 = Object.assign(obj1, obj2);
    return obj3;
}
console.log(unir());
*/



//Exercicio 44
/*let pessoa = {
    nome: "Idelcio",
    idade: 32,
    sexo: "Masculino",
    hobbies: new Array()
}
for(let atri in pessoa){
    console.log(typeof(atri));
}
console.log(typeof(pessoa.idade))
*/