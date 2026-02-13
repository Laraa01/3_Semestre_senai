//criando um metodo construtor
class Pessoa{
    //Atributos
    constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
}
}

const pessoa1 = new Pessoa('Claudia', 25)
console.log(pessoa1);

const pessoa2 = new Pessoa('Livia', 20)
console.log(pessoa2)