import { estilos } from "../style/Estilos"
import foto from '../../public/img/foto.png'

const Aula08 = () => {
    return(
        <div style={estilos.cardAula}>
            <h2>Aula 08 - Revisão</h2>
            <h3>Revisão de conteúdo com o Jogo Número Secreto</h3>

            <a href="https://escola-zeta.vercel.app/">
            <img src={foto} style={{width: '100%'}} />
            Link para o Jogo do número secreto💕
            </a>
        </div>
    )
}

export default Aula08