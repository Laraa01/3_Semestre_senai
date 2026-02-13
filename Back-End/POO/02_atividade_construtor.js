class Bruxo{
    //Atributos
    constructor(nome, idade, feitico, casa, nivelmagia){
    this.nome = nome;
    this.idade = idade;
    this.feitico = feitico;
    this.casa = casa;
    this.nivelmagia = nivelmagia
}
}

const Draco = new Bruxo('Draco Malfoy', 17, 'Avada Kedrava', 'Sonserina', 'Magia Alta')
console.log(Draco);

const Luna = new Bruxo('Luna Lovegood', 17, 'Expelliarmus', 'Corvinal', 'Magia Alta')
console.log(Luna)