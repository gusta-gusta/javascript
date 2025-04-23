const alunos =  ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];
const medias = [10     ,     7,      5,      4,          6,     8];

const reprovados = alunos.filter((aluno, i) => {
    return medias[i] < 7;
});

console.log(reprovados);
