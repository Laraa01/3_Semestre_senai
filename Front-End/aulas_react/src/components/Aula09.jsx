import { useState } from "react"
import { estilos } from "../style/Estilos"
import Aula07 from "./Aula07"
import Aula07_Perfil from "./Aula07_Perfil"
import Aula09_numero from "./Aula09_numero"
import Aula09_ListaNomes from "./Aula09_ListaNomes"

const Aula09 = () => {
    const [numerosSorteado, setNumerosorteado] = useState ( [10, 43, 28, 2] )

    const [listaperfis, setListaperfis] = useState([
        {"nome": "Rodrigo Garro", "foto": "https://i.pinimg.com/736x/9b/54/54/9b5454ea7a3ca1d7588f4e05332b8d25.jpg"},
        {"nome": "Docinho", "foto": "https://i.pinimg.com/736x/fb/21/9d/fb219df172d203aaae3cdede60a78888.jpg"},
        {"nome": "Lindinha", "foto": "https://i.pinimg.com/736x/41/e1/88/41e188ba08d8dd0611b9bf081efbc1c0.jpg"},
        {"nome": "Taylor Swift", "foto": "https://i.pinimg.com/736x/c7/6d/04/c76d045642d13df1114b5a42512f1953.jpg"},
        {"nome": "Lana del Rey", "foto": "https://i.pinimg.com/736x/d7/a5/4d/d7a54d5ed4eafb9b1de8fc968a7328b5.jpg"},
    ])

    function botaoSortear  () {
        const novoNumero = Math.floor(Math.random() * 60) + 1
        setNumerosorteado([...numerosSorteado, novoNumero])
    }

    function botaoExcluir (nr) {
        const novoNumero = numerosSorteado.filter( (numero) => numero !== nr )
        setNumerosorteado( novoNumero )
    }

    return(
        <div style={estilos.cardAula}>
            <h2>Aula 09 - Lista em React</h2>
            <h3>Exibindo counteúdos dinamicamente com listas</h3>
            <hr />
            
            <button onClick={botaoSortear}>Novo Número</button>

            <h3>Lista de números sorteados:</h3>
            {/* A função map é como o for para arrays/vetores */}
            {
                numerosSorteado.map( (numero, index) => (
                    <Aula09_numero key={index} numero={numero} exluir={() => botaoExcluir(numero)} />
                ))
            }

<div style={{display: 'flex'}}>
            {
                listaperfis.map( (perfil, index) => (
                    <Aula07_Perfil key={index} nome={perfil.nome} foto={perfil.foto}/>
                ) )
            }</div>
            <hr />
            <Aula09_ListaNomes/>

        </div>
    )
}

export default Aula09