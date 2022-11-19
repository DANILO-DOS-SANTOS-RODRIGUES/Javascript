class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(){
        const imc =  this.calcularImc();
        if(imc < 18 ){
            return ( 'esta abaixo do peso' );
        }else if(imc >= 18.5 && imc < 25){
            return ('esta no peso normal');
        } else if (imc >= 25 && imc < 30) {
            return ('Acima do peso');
        } else if (imc >= 30 && imc < 40) {
            return ('Obeso');
        } else {
            return ('Obesidade Grave');
        }
    }
}



const jose = new Pessoa('jose',75,1.75);
console.log(jose.classificarImc());

const cleberson = new Pessoa('cleberson',100,1.90);
console.log(cleberson.classificarImc());