let numero = 11;
const isnumeroDivisivelPor5 = (numero % 5) === 0;
// a porcentager pega o resto da divisão, o os === é para verificar a igualdade/fazer uma comparação

if(numero === 0){
    console.log('Numero é invalido')
}
if(numeroDivisivelPor5){
    console.log('O numero ' + numero + ' é divisivel divisivel por 5');
}else{
    console.log('O numero ' + numero + ' não é divisivel por 5');
}
