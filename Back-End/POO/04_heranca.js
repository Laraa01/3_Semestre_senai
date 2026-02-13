class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    apresentar(){
        return`${this.nome}`;
    }
}

class Pessoafisica extends Pessoa{
    cpf;

    constructor(nome, cpf){
        super(nome);
        this.cpf = cpf
    }
}

class PessoaJuridica extends Pessoa{
    cnpj;

    constructor(nome, cnpj){
        super(nome);
        this.cnpj = cnpj
    }
}

const ana = new Pessoafisica("Ana", "123.456.789-00");
console.log(ana.apresentar());

const sesi = new PessoaJuridica("SESI - Andradina", "12.345.678/001-90")
console.log(sesi.apresentar());