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

function compararPessoa(p1,p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }else{
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`); 
    }
}

const danilo = new Pessoa('Danilo', 23);
const ruan = new Pessoa('Ruan', 11);

compararPessoa(danilo,ruan);
