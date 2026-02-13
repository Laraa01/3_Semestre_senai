const pais = {
    "nome" : "Brasil",
    "capital" : "Brasília",
    "populacao" : 211000000,
    "idioma" : "Português",
    "regiao" : {
        "sudeste": "São Paulo / Rio de Janeiro / Minas / ES",
        "sul": "PR SC RS",
        "norte" : "AM AC RR RO PA AP TO"
    }
}

console.log(pais.capital);
console.log(pais.idioma);
console.log(pais.regiao.sul);

// let nome = pais.nome;
// let capital = pais.capital;
// let populacao = pais.populacao;
// let idioma = pais.idioma;
let { nome, capital, populacao, idioma } = pais;
console.log(nome, capital, populacao, idioma);