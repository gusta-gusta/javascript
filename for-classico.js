const notas = [10, 5, 5, 10, 10, 2];

for (let indice = 0; indice < notas.length; indice++) {
    console.log(indice, notas[indice]);
}

let somaDasNotas = 0;

for (let indice = 0; indice < notas.length; indice++) {
    somaDasNotas += notas[indice];
}

console.log("soma é: "+ somaDasNotas);
