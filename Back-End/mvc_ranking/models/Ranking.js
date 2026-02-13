class Rank {
    constructor(id, nome, pontuacao, nivel, acoes){
        if(!nome || !pontuacao){
            throw new Error('Nome e Pontuação são obrigatorios')
        }
        this.id = id;
        this.nome = nome;
        this.pontuacao = pontuacao;
        this.nivel = nivel;
        this.acoes = false;
    }
    
}