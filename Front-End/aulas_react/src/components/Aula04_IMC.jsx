const Aula04_IMC = ( { nome, peso, altura } ) => {

    // let nome = 'Dudinha';
    // let peso = 40;
    // let altura= 1.55;
    let imc = peso / altura ** 2;

    return(
        <div>
            <h3>Calculadora de IMC</h3>
            <p >Olá {nome}</p>
            <p>Altura: {altura}cm</p>
            <p>Peso: {peso}</p>
            <p>IMC: {imc.toFixed(1)}kg/m²</p>
            <hr />
        </div>
    )
}

export default Aula04_IMC