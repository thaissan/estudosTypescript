import readline = require("readline-sync")

let loop: boolean = true

do{
try{

validarIdade(15)

loop = false

}catch(error){
    if(error instanceof Error)
    console.log("Erro: Digite uma idade maior que 18 anos!")
    else
    console.log(error)
}

}while(loop)

function validarIdade(idade: number): void{
    if (idade < 18)
    throw new Error("A pessoa é menor de idade")
    else
    console.log("A pessoa é maior de idade")

}