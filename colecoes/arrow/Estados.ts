let estados: Array<string> = [
    "São Paulo",
    "Rio de Janeiro ",
    "Minas Gerais",
    "Epírito Santo",
    "Rio Grande do Sul",
    "Rio Grande do Norte",
    "Santa Catarina",
    "Paraná"
]

let estadosRepetidos: Array<string> = [
    "São Paulo",
    "Rio de Janeiro ",
    "Minas Gerais",
    "Epírito Santo",
    "Rio Grande do Sul",
    "Rio Grande do Norte",
    "Santa Catarina",
    "Paraná",
    "Rio de Janeiro",
    "Minas Gerais",
]

let estadosContemRio =  estados.filter(e => e.includes("Rio"));

console.dir(estadosContemRio)

let estadosRioParana =  estados.filter(e => {
    return e === "Rio de Janeiro || e === Parana"
});
console.log(estadosRioParana)
