//Função nomeada
function saudacao(nome) {
    console.log(`Tenha um bom dia ${nome}`);
}
saudacao('Lara')

//Função Anônima
const saudacao2 = function (nome) {
    console.log(`Tenha um bom dia ${nome}`);
}
saudacao2('Lara')

//Função nomeada Soma
function soma(n1, n2) {
    let resultado = n1 + n2;
    return resultado
}

console.log(soma(5, 4))

//Função anônima Soma
const soma2 = function(n1, n2) {
    let resultado = n1 + n2;
    return resultado
}

console.log(soma2(3, 7))