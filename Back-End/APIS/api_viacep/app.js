import express from 'express';

const app = express()

app.use('/dogs', express.static('public'))

//Criação do primeiro endpoint
app.get('/', async(req, res) =>  {
    res.status(200).json("API Funcionando");
})

//Criando novo endpoint para consumir dados da API VIACEP
app.get('/cep/:codigo', async(req, res) => {
    const codigo = req.params.codigo;
    
    //metodo fetch é o mensageiro que vai ate a outra api e traz a resposta
    const resposta = await fetch(`https://viacep.com.br/ws/${codigo}/json/`)
    const dados = await resposta.json();

    const cidade = dados.localidade;
    const estado = dados.uf;

    // res.json(dados);
    res.status(201).json({cidade, estado})
})

//Atividade SWAPI
app.get('/swapi/personagem/:id', async(req, res) => {
    const id = req.params.id;
    //pode usar dessa mandeira: const {id} = req.params
    
    const resposta = await fetch(`https://swapi.dev/api/people/${id}/`)
    const dados = await resposta.json();

    const name = dados.name;
    const height = dados.height;
    const mass = dados.mass;
    const eye_color = dados.eye_color

    res.json({name, height, mass, eye_color})
})

app.get('/dog/:id', async(req, res) => {
    const id = req.params.id
    const url = `https://http.dog/${id}.jpg`
    res.json({url});
})


const porta = 3000;
app.listen(porta, () =>{
    console.log(`Servidor rodando http://localhost:${porta}`);
})