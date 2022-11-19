const danilo ={
    nome: 'Danilo',
    idade: 23,
    descrever: function () {
        console.log( `Meu nome é ${this.nome} e minha idade ${this.idade}`);
    }
};

danilo.descrever = function() { //sobrescrevendo a função
    console.log(`Meu nome é ${this.nome}`);
}

danilo.altura = 1.85; //acesso direto
danilo.descrever();
//sintax para pega os valores de forma mais dinamicas, tambem utilizado para pegar um atributo no qual não se sabe o nome.
const atributo = 'idade';
console.log(danilo[atributo]);
danilo['nome'] ='teste'
console.log(danilo['nome']);