let notaProva1 = 7;
let notaProva2 = 7;
let notaProva3 = 7;

let notaMedia = (notaProva1 + notaProva2 + notaProva3) / 3;

if (notaMedia < 5) {
    console.log('Aluno esta com a media abaixo da nota minima para a recuperação que é entre 5 e 7, logo ele esta reprovado, sua nota foi: ' + notaMedia.toFixed(2));
} else if (notaMedia >= 5 && notaMedia < 7) {
    console.log('O aluno não atingiu a media para aprovação que é 7, logo ele esta de recuperação, sua nota foi: ' + notaMedia.toFixed(2));
} else {
    console.log('Aluno aprovado! Sua nota foi de: ' + notaMedia.toFixed(2));
}
