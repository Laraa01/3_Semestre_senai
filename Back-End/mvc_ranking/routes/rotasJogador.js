import express from 'express';
import JogadoresControllers from '../controllers/jogadoresControllers.js';

const router = express.Router();

//rota para listar 
router.get('/Jogadores', JogadoresControllers.listar);

//rota para adicionar
router.get('/Jogadores', JogadoresControllers.listar);

//rota para marcar como lido
router.post('/Jogadores/adicionarPontos', JogadoresControllers.adicionarPontos);

export default router;