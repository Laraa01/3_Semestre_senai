//Abstração
class Personagem{
    nome;
    cor;
    mito;
    escola;
}

const personagem1 = new Personagem();

personagem1.nome ="Draculaura";
personagem1.cor ="Rosa";
personagem1.mito="Vampira";
personagem1.escola="Monster High";
console.log(personagem1);
console.log(personagem1.nome);
console.log(personagem1.mito);

const personagem2 = new Personagem()

personagem2.nome ="Clawdeen Wolf";
personagem2.cor ="Roxo";
personagem2.mito="Lobisomen"
personagem2.escola="Monster High"
console.log(personagem2);
console.log(personagem2.nome);
console.log(personagem2.cor);


//Encapsulamento
class Personagem3{
    #mito;
    nome;
    cor;
    escola;

    constructor(nome, cor, escola, mito){
        this.nome = nome;
        this.cor = cor;
        this.escola = escola
        this.#mito = mito 
    }

    apresentar(){
        return `${this.nome}, ${this.cor}, ${this.escola}`
    }
    mostrarMito(){
        return this.#mito;
    }
}

const personagem4 = new Personagem3('Cleo de Nile', 'dourado', 'Monster High', 'Cleópatra');
console.log(personagem4.apresentar());
console.log(personagem4.mostrarMito());

//Herança
class Personagem5 {
    constructor(nome, cor){
        this.nome = nome
        this.cor = cor
    }

    apresentar(){
        return`${this.nome} e ${this.cor}`;
    }
}

class Personagemnovo extends Personagem5{
    mito;

    constructor(nome, cor, mito){
        super(nome, cor);
        this.mito = mito
    }
}

class OutroPersonagem extends Personagem5{
    escola;

    constructor(nome, cor, escola){
        super(nome, cor);
        this.escola = escola;
    }
}

const lagoona = new Personagemnovo("Lagoona", "azul", "Monstro do Mar");
console.log(lagoona.apresentar());

const frankie = new OutroPersonagem("Frankie", "verde", "Monster High")
console.log(frankie.apresentar());


//Poliformismo
class Personagem6 {
 constructor(nome, cor) {
 this.nome = nome;
this.cor = cor;
 }

 apresentar() {
 return `Personagem ${this.nome} sua cor é ${this.cor}`;
 }

Origem2(originou = "Origem") {
return `${this.nome} tem origem ${originou}!`;
}
}

class abbeyB extends Personagem6 {
    constructor(nome, cor) {
        super(nome, cor);
        this.familia = "Abominável das Neves"
    }
    apresentar() {
        const Personagem7 = super.apresentar()
        return `${this.personagem7} - Familia: ${this.familia}`
    }
}
 const abbey = new Personagem6("Abbey", "Bominable - Abminavel das Neves");
 console.log(abbey.apresentar())