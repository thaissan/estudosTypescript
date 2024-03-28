const numeros: Array<number> = new Array<number>

numeros.push(1)
numeros.push(5)
numeros.push(7)
numeros.push(1)

numeros.unshift(2.5, 4.5)

console.table(numeros)

console.log("Aposição do elemento 5 é: " + numeros.indexOf(5))

console.log("O elemento 7 existe ? " + numeros.includes(7))

console.log("O elemento 10 existe ? " + numeros.includes(10))
 