import { useState } from "react";

const Aula06_placar = () => {
    const [placar, setPlacar] = useState(0)
     const [placar1, setPlacar1] = useState(0)
     const [placarBasquete, setBasquete] = useState(0)
     const [placarBasquete2, setBasquete2] = useState(0)
     
     function botaoZerar() {
        setPlacar(0)
        setPlacar1(0)
        setBasquete(0)
        setBasquete2(0)
     }

    return(
        <div>
            <h2>Placar Eletrônico</h2>
            <p>Futebol⚽</p>
            <h3>Time 1</h3>
            <h2>{placar}</h2>
             <button onClick={() => setPlacar(placar + 1)}>+1 ponto</button>

             <h3>Time 2</h3>
            <h2>{placar1}</h2>
             <button onClick={() => setPlacar1(placar1 + 1)}>+1 ponto</button>
             <hr />
             <div>
                <h2>Basquete🏀</h2>
                <h3>Time 1</h3>
                <h2>{placarBasquete}</h2>
                <button onClick={() => setBasquete(placarBasquete + 1)}>+1</button>
                <button onClick={() => setBasquete(placarBasquete + 2)}>+2</button>
                <button onClick={() => setBasquete(placarBasquete + 3)}>+3</button>

                <h3>Time 2</h3>
                <h2>{placarBasquete2}</h2>
                <button onClick={() => setBasquete2(placarBasquete2 + 1)}>+1</button>
                <button onClick={() => setBasquete2(placarBasquete2 + 2)}>+2</button>
                <button onClick={() => setBasquete2(placarBasquete2 + 3)}>+3</button>

             </div>
             <button onClick={botaoZerar}>Zerar</button>
        </div>
    )
}

export default Aula06_placar