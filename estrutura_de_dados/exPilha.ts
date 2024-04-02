const readline = require("readline-sync")

import { Stack } from "./Stack"

const pilha = new Stack<number>();
let opcao: number;

do{
        console.log("******************************************");
        console.log("                                          ");
        console.log("    1 - Adicionar um novo livro na pilha  ");
        console.log("    2 - Listar todos os livros da Pilha   ");
        console.log("    3 - Retirar um livro da pilha         ");
        console.log("    0 - O programa deve ser finalizado.   ");
        console.log("                                          ");
        console.log("******************************************");

        opcao = readline.questionInt("Digite a opcao desejada:  ")

        switch (opcao) {
            case 1:
                const nomeLivro = readline.question("\nDigite o nome do livro: ");
                pilha.push(nomeLivro);
                console.log("\nPilha: ");
                pilha.printStack();
                console.log("\n Livro adicionado com êxito!");
                break;
            case 2:
              if(pilha.isEmpty())
              console.log("A Pilha está vazia!");
              else{
                console.log("\nLista de Livros na pilha: ");
                pilha.printStack();
              }
              break;
            case 3:
                if(pilha.isEmpty())
                console.log("\nNão há Livros na pilha!");
                else{
                    console.log("\nPilha:");
                    
                    pilha.pop();

                    pilha.printStack();

                    console.log("\nUm Livro foi retirado da pilha!");
                }
              break;
              case 0:
                console.log("Programa finalizado!");
              break;
        
            default:
              console.log("\nOpcao invalida!\n");
              process.exit(0);
              break;
          }

        }while(opcao !== 0)
        