let precoGasolina = 6.66;
let precoEtanol = 5.79;
let tipoCombustivel = 'Etanol';
let kmPorLitro = 10;
let distanciaKM = 100;

if(tipoCombustivel === 'Etanol') {
    let valorGasto = (distanciaKM / kmPorLitro) * precoGasolina;
    console.log('O gasto com combustivel foi de: ' + valorGasto.toFixed(2));
} else {
    let valorGasto = (distanciaKM / kmPorLitro) * precoEtanol;
    console.log('O gasto com combustivel foi de: ' + valorGasto.toFixed(2));
}
