let precoCombustivel = 5.79;
const kmPorLitro = 12;
let distanciaKm = 150;

let gasto = (distanciaKm/kmPorLitro)*precoCombustivel;

console.log(gasto.toFixed(2));//o toFixed é para arredondar as casas 