const Aula04_filmes = ( {imagem, nome, genero} ) => {
    return (
        
            <div style={estilo.cardfilme}>
                <img style={estilo.tamanho} src={imagem} />
                <h3>{nome}</h3>
                <p>Gênero: {genero}</p>
                <button style={estilo.botao}>Assistir</button>
            </div>
            
    )
}

/** @type {{ [key: string]: import('react').CSSProperties }} */
const estilo = {
    botao: {
        backgroundColor: 'deeppink',
        color: 'white',
        borderRadius: 8,
        border:  'none',
        width: '50%',
        padding: '6px'
    },

    tamanho: {
        width: '100%',
        height: '300px',
        borderRadius: 4
    },  
    
    cardfilme: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center',
        maxWidth: '250px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    }
    
}


export default Aula04_filmes