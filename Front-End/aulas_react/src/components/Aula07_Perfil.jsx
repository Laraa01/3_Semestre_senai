import { useState } from 'react'

const Aula07_Perfil = ({foto, nome}) => {
    return(
        <div style={estilo.Estilizacaodiv}>
            <Avatar foto={foto}/>
            <NomeUsuario nome={nome}/>
            <Botao/>
        </div>
    )
}

export const Avatar = ({foto}) => {
    return (
        <img style={estilo.Tamanho} src={foto}/>
        // <img style={estilo.tamanho} src="https://i.pinimg.com/736x/8c/57/13/8c5713a796d03bc6c0ee2e096dd2cdf5.jpg" />
    )
}

export const NomeUsuario = ({nome}) => {
    return (
        <h3>{nome}</h3>
        // <p>Lara c</p>
    )
}

export const Botao = () => {
    const [seguindo, setSeguindo] = useState(false)


    return(
        <button onClick={() => setSeguindo(!seguindo)} style={{...estilo.Botaocor, backgroundColor:  seguindo == false ? "#4caf50" : "#50AFFF", }}>
            {seguindo == false ? "Seguir" : "Deixar de seguir"}
        </button>
    )
}


/** @type {{ [key: string]: import('react').CSSProperties }} */
const estilo = {
    Tamanho: {
        width: '120px',
        borderRadius: '50%'
    },
    Estilizacaodiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        border: '1px, solid #ccc',
        padding: 20,
        width: 220,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        borderRadius: 12,
        margin: 10
    },

    Botaocor: {
        
        color: 'white',
        border: 'none',
        padding: '10px, 16px',
        borderRadius: 6
    }
}

export default Aula07_Perfil;