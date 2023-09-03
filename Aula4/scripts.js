var jogador1 = 0;
var jogador2 = 0;
var placar;
//Condicionais
//if ternario
jogador1 != -1 && jogador2 != -1 ? console.log("Jogadores validos") : console.log("Jogadores invalidos!");
//if e if aninhado
if(jogador1 != -1 && jogador2 != -1){
    if(jogador1 > 0 && jogador2 == 0){
        console.log("jogador 1 marcou ponto!");
        placar = jogador1 > jogador2;
    }else if (jogador2 > 0 && jogador == 0){
        console.log("jogador 2 marcou ponto!");
        placar = jogador2 > jogador;
    }else{
        console.log("ninguem marcou ponto!");
    }
}

//usando switch
switch(placar){
    case placar = jogador1 > jogador2:
        console.log("Jogador 1 Ganhou!");
        break;
    case placar = jogador2 > jogador1:
        console.log("Jogador 2 Ganhou!");
        break;
}

//Estruturas de repetição
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let objeto = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'};

//for
for(let i = 0; i< array.length; i++) {
    console.log(i);
}

//for/in
for(let i in array) {
    console.log(i);
}

//com objetos
for(let i in objeto) {
    console.log(i);
}
//for/of
for(let i of array) {
    console.log(i);
}

//while
var a = 0;
while(a <= 10)
{
    a++;
    console.log(a);
}

//do while
a=0;
do{
    a++;
    console.log(a);
}while(a <= 10);