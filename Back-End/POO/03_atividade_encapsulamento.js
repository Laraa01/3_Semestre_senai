class Bruxo{
    //Atributo privado
    #nivelEnergia = 100;
    //Atributo publico
    nome;
    idade;
    feitico;
    casa;
    nivelMagia;

    constructor(nome, idade, feitico, casa, nivelMagia, nivelEnergia){
        this.nome = nome;
        this.idade = idade;
        this.feitico = feitico;
        this.casa = casa;
        this.nivelMagia = nivelMagia;
        this.nivelEnergia = nivelEnergia //privado
    }

    apresentar(){
        return `${this.nome}, ${this.idade}, ${this.casa}, ${this.feitico}, ${this.nivelMagia}`;
    }
    mostrarnivelEnergia(){
        return this.#nivelEnergia;
    }

    recarregarEnergia(){
        this.#nivelEnergia +=10;
    }

    lancarFeitico(){
        this.#nivelEnergia -=10;
    }
}

const bruxo1 = new Bruxo('Luna Lovegood', 17, '98765432100', 'Expelliarmus', 'Corvinal', 'Alto');
//console.log(bruxo1.apresentar());
console.log(bruxo1.mostrarnivelEnergia());
bruxo1.lancarFeitico();
bruxo1.lancarFeitico();
console.log(bruxo1.mostrarnivelEnergia());
bruxo1.recarregarEnergia();
console.log(bruxo1.mostrarnivelEnergia());