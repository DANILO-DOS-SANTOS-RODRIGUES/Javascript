function escrevaMeuNome(nome){
    return 'Meu nome é ' + nome;
}

function verificarIdade(idade){
    if(idade >= 18){
        console.log(escrevaMeuNome('Danilo') + ' maior de idade');
    }else{
        console.log(escrevaMeuNome('Juan') + ' menor de idade');
    }
}
verificarIdade(99);

function calcularDesconto(valor, desconto){
    return (valor-(valor * (desconto/100)));
}
function calcularAcrescimo(valor, acrescimo){
    return(valor +(valor * (acrescimo/100)));
}

let preco = 100;
const formaPagamento = 5;

    if(formaPagamento === 1){
        console.log('O pagamento escolhido foi debito, o valor final ficou R$' + calcularDesconto(preco,10));
    }else if(formaPagamento === 2 || formaPagamento === 3){
        console.log('O pagamento escolhido foi pix ou dinheiro a vista, o valor final ficou R$' + calcularDesconto(preco,15));
    }else if(formaPagamento === 4){
        console.log('O pagamento escolhido foi parcelado em 2 vezes, o valor final ficou R$' + preco);
    }else{
        console.log('O pagamento escolhido foi parcelado em + de 2 vezes, o valor final ficou R$' + calcularAcrescimo(preco, 10));
    }



