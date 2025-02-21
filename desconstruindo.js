const alunos = ['João', 'Juliana', 'Paulo', 'Gustavo'];
const medidas = [10, 8, 7.5, 10];

const lista = [alunos, medidas];

function exibeNomeNota(aluno) {
    if (lista[0].includes(aluno)) {
        const [alunos, medidas ] = lista;
        const indice = alunos.indexOf(aluno);
        const mediaAluno = medidas[indice];
        console.log(`${aluno} tem a média ${mediaAluno}`);
    } else {
        console.log('Estudante não existe na lista');
    }
}

exibeNomeNota('Gustavo');
exibeNomeNota('Cleitin');
