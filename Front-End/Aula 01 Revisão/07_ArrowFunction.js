//função anônima
const saudacao2 = function (nome) {
    console.log(`Tenha um bom dia ${nome}`);
}
saudacao2('Lara')

//arrow function
const saudacao3 = (nome) => {
    console.log(`Tenha um bom dia ${nome}`);
}
saudacao3('Lara')

//Função anônima Soma
const soma2 = function(n1, n2) {
    let resultado = n1 + n2;
    return resultado
}

console.log(soma2(3, 7))

//Arrow function
const soma3 = (n1, n2) => {
    let resultado = n1 + n2;
    return resultado
}

console.log(soma3(7, 7))

const soma4 = (n1, n2) => n1 + n2;