import Jogadores from '../models/Jogadores.js'

let listajogadores = [
    new Jogadores(1, 'Bianca', 350),
    new Jogadores(2, 'Caio', 130),
    new Jogadores(3, 'Alex', 120),
    new Jogadores(4, 'Julio Cezar', 0)
]

const JogadoresControllers = {
    listar: (req, res) => {
        res.render('Ranking.ejs', {Jogadores: listajogadores})
    },
    adicionar: (req, res) => {
        const { nome, pontuacao} = req.body

        try{

        const novojogador = new Jogadores(listajogadores.length + 1,
                nome,
                Number(pontuacao)
            );
            listajogadores.push(novojogador)
            res.redirect('/Ranking')
        } catch (e)
        {
            res.status(400).render('Ranking.ejs', {lista: listajogadores, erro: e.message})
        }

    },

    adicionarPontos: (req, res) => {
        const {id} = req.body;
        const Jogadores = listajogadores.find(j => j.id === Number(id))
        Jogadores.adicionarPontos();
        res.redirect('/Ranking');
    }
}

export default JogadoresControllers