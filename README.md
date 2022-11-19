Desenvolvendo aspectos da linguagem de programação javascript.

Na aula.js foi declaração de variaveis e constantes e operadores aritméticos e tambem a mostrar uma mensagem no console, onde tambem teve o primeiro desafio de calcular o gasto com combustivel em uma viagem, tambem usamos o toFixed() para arredondar o resultado. 

Na aula02.js foi visto  variaveis booleanas, estruturas condicionas simples if else e else if, mais alguns operadores. No segundo desafio foi colocado para verificar qual o tipo de combustivel e realiza o calculo do valor gasto de combustivel na viagem.

Na terceira aula esta sendo realizado exercicios onde o exercicio01.js foi de calcular a media de um aluno e verificar se ele passou, reprovou ou ficou de recuperação. No exercicio02.js foi para calcular o imc e utilizar condicionais para verificar se esta abaixo do peso, no peso normal, acima do peso, obeso ou obesidade grave. No exercicio03.js foi para verificar a forma de pagamento, acréscentar ou subtrair juros  

A aula04.js é sobre funções, as funções no javascript são como "metodos" onde podemos manipulalas como se fossem um valor, tambem pode ser criadas funções não nomeadas e imediatamente invocadas colocando a função dentro de parentes ( funcao() { } ); isso deixa o codigo isolado, é utilizado para codigos que só serão usadas uma unica vez.

A aula05.js foi visto mais sobre funções, nomes de funções são verbos "façaAlgo", e feito exercicios sobre função, na função calcularDesconto e calcularAcrescimo foi dividido por 100 para não ter que converter o juros e o desconto. return (valor + (valor * (juros/100)))

A aula06.js foi sobre objetos, onde um objeto é uma coleção dinamica de  chaves e valores, ele agrupa chaves e valores podendo ser incrementado informações posteriormente chamando o objeto definindo a chave e passa o valor. Tambem pode ser adicionado funções dentro de um objeto, essa função é chamada de metodo. Tambem da para sobrescrever a função. 

const nomeDoObjeto = {//objeto literal não precisa de uma classe
    chave:'valor',
    chave:20,
};

nomeDoObjeto.chave = valor;

Tambem foi visto sobre classes classesAula06.js, sua função é definir como serão os atributos dos objetos, para que eles sejam instanciados e terem um padrão. Tem o constructor que seria como a regra a ser seguida quando a classe é instanciada por exemplo a  classe pessoa por obrigação ela tem que ter um nome e uma idade.

class nomeDaClasse{

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

Na aula07.js foi visto sobre listas(arrays)

const nomeLista = [valo1,'valor2',valor2];//pode conter string e numericos juntos mas não é usual.
nomeLista.push('valor4'); //adiciona um valor na lista de forma dinamica.
nomeLista[4] = 'valor5';//adiciona um valor a lista de forma direta, tambem pode ser utilizado para substituir um valor.
nomeLista.pop();//pega o ultimo item da lista e armazena ele, retirando-o da lista
nomeLista.shift()//pega o primeiro item da lista e armazena ele, retirando-o da lista
nomeLista.length// mostra o tamanho da lista
console.log(nomeLista[0]);//trás um valor especifico da lista
