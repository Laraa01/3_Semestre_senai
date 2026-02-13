const Aula05_Exercicio = () => {

function botaoClique (){
    alert('Você clicou no botão 1')
    console.log('Clique no botão 1')
}

function botaoClique2 (){
    alert('Você clicou no botão 2')
    console.log('Clique no botão 2')
}

function entradaMouse (event){
    console.log('Mouse entrou');
    event.target.style.backgroundColor = '#bc48c4'
}

function saidaMouse (event){
    console.log('Mouse saiu');
    event.target.style.backgroundColor = '#fff67d'
}

function entradaMouse1 (event){
    console.log('Mouse entrou');
    event.target.style.backgroundColor = '#1a548d'
}

function saidaMouse1 (event){
    console.log('Mouse saiu');
    event.target.style.backgroundColor = '#721892'
}

function alterarCor (event) {
    if (event.key == 'a') {
        event.target.style.backgroundColor = '#2121eb'
        event.target.style.color = '#fff' 
    } else if (event.key == 'g') {
        event.target.style.backgroundColor = '#21eb57'
        event.target.style.color = '#fff'
    } else if (event.key == 'p') {
        event.target.style.backgroundColor = '#111111'
        event.target.style.color = '#fff'
    } else if (event.key == 'v') {
        event.target.style.backgroundColor = '#f40d0d'
        event.target.style.color = '#fff'
    } else if (event.key == 'y') {
        event.target.style.backgroundColor = '#ebe821'
        event.target.style.color = '#fff'
}
}

    return (
        <div>
            <hr />
        <button onClick={botaoClique}>Botão 1</button>
        <button onClick={botaoClique2}>Botão 2</button>
        <hr />
            <input onChange={() => alert(event.target.value)} type="text" placeholder="Digite aqui" />
            <hr />
            <div>
                <p onMouseEnter={entradaMouse} onMouseLeave={saidaMouse}>passe o mouse aqui</p>
            </div>

            <hr />
            <input type="text" onKeyDown={() => alert(event.key)} />
            <hr />
           <p onClick={botaoClique}  onMouseEnter={entradaMouse1} onMouseLeave={saidaMouse1}>Campo de texto - passe o mouse e clique</p><input type="text" onChange={() => alert(event.target.value)} onKeyDown={alterarCor}
            placeholder="a - azul, v - vermelho, p - preto, y - amarelo, g - verde"/> 
        </div>
    )

}

export default Aula05_Exercicio