/*
Escolha qual sera a forma de pagamento. 
1- À vista no debito 10% de desconto.  
2- À vista no dinheiro ou PIX 15% de desconto.
3- Em duas vezes sem juros.  
4- mais parcelas com juros de 10%.
*/
let preco = 100;
const formaPagamento = 5;


if(formaPagamento === 1){
    let desconto = preco * 0.1;
    let precoAPagar = preco - desconto;
    console.log(precoAPagar);
}else if(formaPagamento === 2 || formaPagamento === 3){
    let desconto = preco - (preco * 0.15);
    console.log(desconto);
}else if(formaPagamento === 4){
    console.log(preco);
}else{
    let acrescimo = preco + (preco * 0.1);
    console.log(acrescimo);
}