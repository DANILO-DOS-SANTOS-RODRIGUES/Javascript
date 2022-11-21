const entradas = [10, 5, 50, 10, 98, 23, 1, 100, 40, 80, 110];
let i = 0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto)
}

module.exports = { gets, print };