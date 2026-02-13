//criando nossa primeira classe
class Pessoa{
    //Atributos
    nome;
    idade;
}

//Criando novo objeto(instância)
const pessoa1 = new Pessoa();
console.log(pessoa1);

//Aplicando valores aos atributos
pessoa1.nome ="Carlos";
console.log(pessoa1);
console.log(pessoa1.nome);
pessoa1.idade = 30;
console.log(pessoa1);

const pessoa2 = new Pessoa();
pessoa2.nome="Lara"
pessoa2.idade = 16;
console.log(pessoa2);