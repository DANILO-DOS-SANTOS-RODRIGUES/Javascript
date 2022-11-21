Desenvolvendo aspectos da linguagem de programação javascript com node.

Na aula.js foi declaração de variaveis e constantes e operadores aritméticos e tambem a mostrar uma mensagem no console, onde tambem teve o primeiro desafio de calcular o gasto com combustivel em uma viagem, tambem usamos o toFixed() para arredondar o resultado. 

Na aula02.js foi visto  variaveis booleanas, estruturas condicionas simples if else e else if, mais alguns operadores. No segundo desafio foi colocado para verificar qual o tipo de combustivel e realiza o calculo do valor gasto de combustivel na viagem.

Na terceira aula esta sendo realizado exercicios onde o exercicio01.js foi de calcular a media de um aluno e verificar se ele passou, reprovou ou ficou de recuperação. No exercicio02.js foi para calcular o imc e utilizar condicionais para verificar se esta abaixo do peso, no peso normal, acima do peso, obeso ou obesidade grave. No exercicio03.js foi para verificar a forma de pagamento, acréscentar ou subtrair juros  

A aula04.js é sobre funções, as funções no javascript são como "metodos" onde podemos manipulalas como se fossem um valor, tambem pode ser criadas funções não nomeadas e imediatamente invocadas colocando a função dentro de parentes ( funcao() { } ); isso deixa o codigo isolado, é utilizado para codigos que só serão usadas uma unica vez.

A aula05.js foi visto mais sobre funções, nomes de funções são verbos "façaAlgo", e feito exercicios sobre função, na função calcularDesconto e calcularAcrescimo foi dividido por 100 para não ter que converter o juros e o desconto. return (valor + (valor * (juros/100)))

A aula06.js foi sobre objetos, onde um objeto é uma coleção dinamica de  chaves e valores, ele agrupa chaves e valores podendo ser incrementado informações posteriormente chamando o objeto definindo a chave e passa o valor. Tambem pode ser adicionado funções dentro de um objeto, essa função é chamada de metodo. Tambem da para sobrescrever a função. 

const nomeDoObjeto = {   //objeto literal não precisa de uma classe
    chave:'valor',
    chave:20,
};

nomeDoObjeto.chave = valor;

Tambem foi visto sobre classes classesAula06.js, sua função é definir como serão os atributos dos objetos, para que eles sejam instanciados e terem um padrão. Tem o constructor que seria como a regra a ser seguida quando a classe é instanciada por exemplo a  classe pessoa por obrigação ela tem que ter um nome e uma idade.

class nomeDaClasse {
    atributo1;
    atributo2;

    constructor(parametro1,parametro2){ // Regra a ser seguida
        this.atributo1 = parametro1;
        this.atributo2 = parametro2;
    }

    metodo(atributoExterno, atributoExtreno){ // O metodo é uma função dentro de uma classe.
        return || consolo.log + atributoExterno ou this.atributo1 ;// se for um atributoExterno tem que declarar ele se for interno só usar o this.
    }
}

No exercicioAula06.js pratica onde utilizamos a classe pessoa criamos uma função para definir qual pessoa era mais velha e mostrar o nome e que é mais velha.
No exercicio04.js foi utilizado a orientação a objeto para definir quantos reais seriam gastos com combustivel em uma viagem de carro.

Na aula07.js foi visto sobre listas(arrays) e tambem sobre estruturas de repetição for, feito um exemplo onde calculamos a media de um aluno com base em suas notas inseridas em uma lista. Tambem foi visto sobre depuração no vscode

String são uma lista de caracteres

Sintaxe

const nomeLista = [valo1,'valor2',valor2];//pode conter string e numericos juntos mas não é usual.
nomeLista.push('valor4'); //adiciona um valor na lista de forma dinamica.
nomeLista[4] = 'valor5';//adiciona um valor a lista de forma direta, tambem pode ser utilizado para substituir um valor.
nomeLista.pop();//pega o ultimo item da lista e armazena ele, retirando-o da lista
nomeLista.shift()//pega o primeiro item da lista e armazena ele, retirando-o da lista
nomeLista.length// mostra o tamanho da lista
console.log(nomeLista[0]);//trás um valor especifico da lista

No exercicio06.js foi feito um programa que calcula a tabuada de um determinado numero, utilizando a estrutura de loop for.

No exercicio07.js foi feito um programa para determinar os numeros pares de uma lista utilizando estrutura condicional if e loop for;

Na oitava aula foi visto sobre importação e exportação. O gets pega o input(a inserção de dados)  e o print seria como um console.log, criamos dois arquivos o main.js e a funcao-auxiliar.js. Na funcoes-auxiliares.js foi feito duas funções, um gets mocado/mocked ou seja esta simulando uma leitura, e um print que seria para a visualização do que foi informado.
Na main.js estamos importando o que esta dentro das funcoes-auxiliares.js, e para isso usamos o require('./localDaImportacao'), e na funcoes-auxiliares.js temos que exportar para isso utilisamos o module.exports = {funcaoParaExportar1, funcaoParaExportar2} onde o module é um objeto e o exports é um atributo e estamos definindo/atribuindo um objeto  literal dentro dele.
Tambem foi visto um pouco sobre o ciclo de vida da importação, quando importa a primeira vez o node js roda todo o arquivo que esta sendo importado require('./localDaImportacao') e armazena o "cach" para que ele não precise ser execultado novamente caso houver outra importação.

Tambem foi visto sobre o object destructuring, que é uma forma mais "clean" de pegar os valores de um objeto sem ter que ficar duplicando variavel, por exemplo.

//objeto pessoa
const pessoa ={
    nome: 'Danilo',
    idade:23
};

//como normalmente é utilizado
let nome = pessoa.nome;
let idade = pessoa.idade;
nome; // => Danilo
idade; //=>23

//utilizando o object destructuring
const { nome, idade } = pessoa;
nome; // => Danilo
idade; //=>23

