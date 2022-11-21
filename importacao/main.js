const {gets, print} = require('./funcoes-auxiliares');

const quantidadeDeAlunos = gets();// utilizado para pegar a quantidade de alunos que no caso é definido no primeiro item da lista
let mairoValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > mairoValorEncontrado) {
        mairoValorEncontrado = numeroSorteado;
    }

}


print(mairoValorEncontrado);