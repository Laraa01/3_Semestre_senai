class Jogadores {
    constructor(id, nome, pontuacao){
        this.id = id;
        this.nome = nome;
        this.pontuacao = Number(pontuacao)
    }
    
    resumo(){
        return`${this.nome} - ${this.pontuacao}`
    }

    adicionarPontos () {
        this.pontuacao += 50;
    }

    Nivel(){
        if(this.pontuacao <= 150) return 'Iniciante';
        if(this.pontuacao <= 300) return 'Intermediário';
        return 'Avançado'
    }

}

export default Jogadores