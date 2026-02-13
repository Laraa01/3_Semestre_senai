class Bruxo {
    constructor(nome, nivelMagia){
        this.nome = nome;
        this.nivelMagia = nivelMagia;
    }

    apresentar(){
        return`Olá ${this.nome} seu nivel de magia é ${this.nivelMagia}`;
    }
}

class BruxoGrifinoria extends Bruxo{
    casa;

    constructor(nome, nivelMagia = 1, casa){
        super(nome, nivelMagia, casa);
        this.casa = 'Grifinoria'
    }
feiticoAssintura() {
        return this.lancarFeitico("Expelliarmus");
    }

    apresentar(){
        return`Olá ${this.nome}, sua casa é: ${this.casa}`;
    }
}

class BruxoSonserina extends Bruxo{
    casa;

    constructor(nome, nivelMagia = 1, casa){
        super(nome, nivelMagia, casa);
        this.casa = 'Sonserina'
    }

    feiticoAssintura() {
        return this.lancarFeitico("Avada Kedrava")
    }
    apresentar(){
        return`Olá ${this.nome}, sua casa é: ${this.casa}`;
    }
}

const harry = new BruxoGrifinoria("Harry", "nivel 1", "Expelliarmus",  "Grifinoria");
console.log(harry.apresentar());

 const draco = new BruxoSonserina("Draco", "nivel 1","Avada Kedrava", "Sonserina")
 console.log(draco.apresentar());