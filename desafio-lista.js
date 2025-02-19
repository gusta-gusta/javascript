const alunos = ['João', 'Juliana', 'Paulo', 'Gustavo'];
const medidas = [10, 8, 7.5, 10];

const lista = [alunos, medidas];

function exibeNomeNota(aluno) {
    if (lista[0].includes(aluno)) {
        const indice = lista[0].indexOf(aluno);
        const mediaAluno = lista[1][indice];
        console.log(`${aluno} tem a média ${mediaAluno}`);
    } else {
        console.log('Estudante não existe na lista');
    }
}

exibeNomeNota('Gustavo');
exibeNomeNota('Juliana');
