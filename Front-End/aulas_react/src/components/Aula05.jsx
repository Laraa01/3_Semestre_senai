import { estilos } from "../style/Estilos"
import Aula05_Exercicio from "./Aula05_Exercicio"

const Aula05 = () => 
{
    const botaoDuploClique = () => {
    alert('Duplo Clique')
}
function botaoClique (){
    alert('Você clicou no botão')
    console.log('Clique no botão')
}

function entradaMouse (event){
    console.log('Mouse entrou');
    event.target.style.backgroundColor = '#7db5ff'
}

function saidaMouse (event){
    console.log('Mouse saiu');
    event.target.style.backgroundColor = '#7dffb3'
}

function alterarCor (event) {
    if (event.key == 'a') {
        event.target.style.backgroundColor = '#2121eb'
        event.target.style.color = '#fff' 
    } else if (event.key == 'v') {
        event.target.style.backgroundColor = '#21eb57'
        event.target.style.color = '#fff'
    } else if (event.key == 'c') {
        event.target.style.backgroundColor = '#676777'
        event.target.style.color = '#fff'
    } else if (event.key == 'r') {
        event.target.style.backgroundColor = '#9321eb'
        event.target.style.color = '#fff'
    }
}

   return(
        <div style={estilos.cardAula}>
            <h2>Aula 05 - Eventos de um componente</h2>
            <h3>Os eventos são fundamentais para criar interatividade em aplicações web</h3>
            <hr />

            <p>Evento onClick - clique do usuário em qualquer elemento</p>
            <button onClick={botaoClique}>Clique aqui</button>
            <p onDoubleClick={() => alert ('botaoDuploClique')}>Este parágrafo recebe um duplo clique</p>

            <hr />

            <p>Evento onChange - sempre que um campo de entrada é alterado</p>

            <input onChange={() => console.log(event.target.value)} type="text" placeholder="Digite algo..." />

            <select onChange={() => alert(event.target.value)}> 
                <option value="1A"> 1º A EM</option>
                <option value="2A"> 2º A EM</option>
                <option value="3A"> 3º A EM</option>
                <option value="3B"> 3º B EM</option>
            </select>

            <hr />
            <p>Evento onMouseEnter / onMouseLeave</p>
            <p onMouseEnter={entradaMouse} onMouseLeave={saidaMouse}>Passe o mouse aqui</p>

            <hr />
            <p>Evento onKeyDown - Aciona um evento quando pressiona uma tecla</p>
            <input type="text" onKeyDown={() => alert(event.key)} />
            <input type="text" onKeyDown={alterarCor}
            placeholder="a - azul, v - verde, c - cinza, r - roxo" />

<hr />
            <Aula05_Exercicio/>
        </div>
    )
    
}

export default Aula05;