import readline = require('readline-sync');

let numero1: number;
let numero2: number;

numero1 = readline.questionFloat("Digite o primeiro numero: "); 
numero2 = readline.questionFloat("Digite o segundo numero: ");

console.log("Soma: " + somar(numero1, numero2));
console.log("Subtracao: " + somar(numero1, numero2));
console.log("Multiplicacao: " + somar(numero1, numero2));

let divisao = dividir(numero1, numero2);

if(divisao !== null)
    console.log("Dividir: " + divisao);
else
    console.log("Não existe divisão por zero")

about();

//Função com retorno
function somar(num1: number, num2: number): number{ //parametro da funcao n precisa usar let
    return num1 + num2;
}          

function subtrair(num1: number, num2: number): number{ //parametro da funcao n precisa usar let
    return num1 - num2;
}

function multiplicar(num1: number, num2: number): number{ //parametro da funcao n precisa usar let
    return num1 * num2;
}

function dividir(num1: number, num2: number): number | null{ //parametro da funcao n precisa usar let
    let divisao = num1 / num2;
    return (divisao != Infinity ? divisao : null);
}

//Função sem retorno
function about(): void{
    console.log("Feito por Thais");
}