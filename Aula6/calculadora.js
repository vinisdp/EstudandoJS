function calculadora(){
    const operacao = Number(prompt("Escolha uma operacao\n1-Soma(+)\n2-Subtração(-)\n3-Multiplicação(*)\n4-Divisão Real(/)\n5-Divisão Inteira(%)\n6-Potenciação(**)"));
    
    
    if(!operacao||operacao >= 7){
        alert("Operacao Invalida!");
        calculadora();
    }else{

        let n1 = Number(prompt("Digite o primeiro valor:"));
        let n2 = Number(prompt("Digite o segundo valor:"));
        let resultado;

        if(!n1 || !n2) {
            alert('Valor 1 ou 2 invalido');
            calculadora();
        }else{
            function soma(){  
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
            function subtracao(){  
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
            function multiplicacao(){  
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoReal(){  
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoInteira(){  
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é ${resultado}`);
                novaOperacao();
            }
            function potencia(){  
                resultado = n1 ** n2;
                alert(`${n1} ^ ${n2} = ${resultado}`);
                novaOperacao();
            }

            function novaOperacao(){
                let opcao= Number(prompt("Deseja fazer uma nova operação:\n1-Sim\n2-Não"));
                if(opcao == 1){
                    calculadora();
                }else if(opcao == 2){
                    alert('Até mais!');
                }else{
                    alert('Digite uma opçao valida');
                    novaOperacao();
                }
            }
            
            

        }
        /*if(operacao == 1){
            soma();
        }else if(operacao == 2){
            subtracao();
        }else if(operacao == 3){
            multiplicacao();
        }else if(operacao == 4){
            divisaoReal();
        }else if(operacao == 5){
            divisaoInteira();
        }else if(operacao == 6){
            potencia();
        }*/
        switch(operacao){
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potencia();
                break;
        }
    }

    
}
calculadora();