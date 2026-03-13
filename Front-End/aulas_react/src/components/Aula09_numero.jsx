const Aula09_numero = ( {numero, index, excluir} ) => {
    return (
        <p> 
            {numero} 
            <button onClick={excluir} >Excluir</button>
        </p>
    )
}

export default Aula09_numero