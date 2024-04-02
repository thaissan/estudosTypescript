const readline = require("readline-sync")

import { Queue } from "./Queue"

const fila = new Queue<string>();
let opcao: number;

do{
        console.log("******************************************");
        console.log("                                          ");
        console.log("    1 - Adicionar cliente na fila         ");
        console.log("    2 - Listar todos os Clientes na fila  ");
        console.log("    3 - Chamar uma pessoa da fila         ");
        console.log("    0 - O programa deve ser finalizado.   ");
        console.log("                                          ");
        console.log("******************************************");

        opcao = readline.questionInt("Digite a opcao desejada:  ")

        switch (opcao) {
            case 1:
                const nome = readline.question("\nDigite o nome: ");
                fila.enqueue(nome);
                console.log("Fila: ");
                fila.printQueue();
                console.log("\n O cliente foi adicionado com êxito!")
                break;
            case 2:
              if(fila.isEmpty())
              console.log("Não há clientes na fila!");
              else{
                console.log("\nLista de Clientes na fila: ")

                fila.printQueue();
              }
              break;
            case 3:
                if(fila.isEmpty())
                console.log("Não há clientes na fila!");
                else{
                    console.log("\nFila:");
                    
                    fila.dequeue();

                    fila.printQueue();

                    console.log("\n O cliente foi chamado!")
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
        