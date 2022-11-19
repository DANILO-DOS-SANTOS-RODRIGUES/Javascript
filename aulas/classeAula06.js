class Pessoa {
    nome;
    idade;
    anoDeNacimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNacimento = 2022 - idade;
    }

    descreva(){
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}
const danilo = new Pessoa('Danilo',23);//instanciando a classe

const ruan = new Pessoa('Ruan',11);


danilo.descreva();
ruan.descreva();

console.log(danilo);