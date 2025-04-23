const notas = [10, 5, 6, 10, 8];

let somaNotas = 0;

notas.forEach(function(nota){

    somaNotas += nota;
})

const media = somaNotas / notas.length;

const notasAtualizadas = notas.map((nota) =>nota + 1 >= 10 ? 10 : nota + 1);

const nomes = ['Joao', 'Gustavo', 'Lorenna', 'Fabricia', 'Jorgin'];

const nomesCaixaAlta = nomes.map((nome) => nome.toUpperCase());


console.log('Média das notas: ' +media);
console.log('Média das notas Atualizadas: ' +notasAtualizadas);
console.log('nomes normal: ' +nomes);
console.log('nomes upperCase: ' +nomesCaixaAlta);