class Bruxo {
    constructor(nome){
        this.nome = nome
    }

    apresentar(){
        return`${this.nome}`;
    }
}

class BruxoGrifinotia extends Bruxo {
    constructor(nome, nivelMagia = 1) {
        super(nome, nivelMagia);
        this.casa = 'Grifinória'
    }

    feiticoAssintura() {
        return this.lancarFeitico("Expelliarmus");
    }
}
 class BruxoSonserina extends Bruxo {
    constructor(nome, nivelMagia = 1) {
        super(nome, nivelMagia);
        this.casa = 'Sonserina';
    }

    feiticoAssintura() {
        return this.lancarFeitico("Avada Kedrava")
    }
 }


const harry = new BruxoGrifinotia("Harry", "1");
console.log(harry.apresentar());

const draco = new BruxoSonserina("Draco", "1")
console.log(draco.apresentar());