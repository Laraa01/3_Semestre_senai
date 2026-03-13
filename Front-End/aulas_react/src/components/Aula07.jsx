import { estilos } from "../style/Estilos"
import Aula07_Multicomponentes, { MeuComponenteNomeado, MeuComponenteNomeado2, enderecoServidor } from "./Aula07_Multicomponentes"
import Aula07_Perfil, { Botao } from "./Aula07_Perfil"

const Aula07 = () => {
    return(
        <div style={estilos.cardAula}>
            <h2>Aula 07 - Importação e exportação de Módulos</h2>
            <h3>Compreendendo importação e exportação padrão ou nomeada</h3>

            <hr />
            <Aula07_Multicomponentes/>
            <MeuComponenteNomeado/>
            <MeuComponenteNomeado2/>
            <p>{enderecoServidor}</p>
            <hr />

           
            <Aula07_Perfil 
            foto= "https://i.pinimg.com/736x/8c/57/13/8c5713a796d03bc6c0ee2e096dd2cdf5.jpg"
            nome= "Lara C"/>
            
            
            
        </div>
    )
}

export default Aula07