//tipos primitivos

//boolean
var VorF = false;
console.log(typeof(VorF));

//number
var number = 1;
console.log(typeof(number));

//string
var nome = "Vinicius";
console.log(typeof(nome));

//function
var funcao = function() {};
console.log(typeof(funcao));

//como declarar
//var pode ser declarada e não precisa de uma atribuição e permite ser alterada sendo escopo global e local 
var variavel;
console.log(variavel);

//let pode ser declarada e não precisa de uma atribuição e permite ser alterada sendo de escopo local
let variavel2;
console.log(variavel2);

//const é uma constante não permite alteração e é necessário inicia-la
const variavel3="Olá";
console.log(variavel3);

//atribuição
var nome = "Vinicius";

//comparação
var comparacao = '0' == 0;
console.log(comparacao);

//comparação identica 
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

//adicao
var adicao = 1 + 1;
console.log(adicao);

//subtração
var subtracao = 1 - 1;
console.log(subtracao);

//divisão real
var divisaoReal = 6 / 2;
console.log(divisao);

//divisão inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

//multiplicacao
var multiplicacao = 1 * 2;
console.log(multiplicacao);

//potenciação
var potencia = 5 ** 10;
console.log(potencia);

//maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

//menor que
var menorQue = 5 < 2;
console.log(menorQue);

//Maior ou Igual que
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

//Menor ou Igual que
var menorOuIgual = 5 <= 2;

//&&
var e = true && false;
console.log(e);

//||
var ou = true || false;
console.log(ou);

//!
var negado = !true;
console.log(negado);