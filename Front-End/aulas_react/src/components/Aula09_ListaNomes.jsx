import { useState, useEffect } from "react";
import Aula09_nome from "./Aula09_Nome";

const Aula09_ListaNomes = () => {
    //Variavel de estado
    const [listaPresenca, setListapresenca] = useState ([]) 
    const [nome, setNome] = useState ('') 

    useEffect( () => {
            const salvarNome = localStorage.getItem('Nomesalvo') || "[]";
            setListapresenca(JSON.parse(salvarNome))
        }, [])
    
    
    function Adicionar () {
        const salvar = [...listaPresenca, nome]
        setListapresenca(salvar)
        console.log(listaPresenca)
        localStorage.setItem('Nomesalvo', JSON.stringify(salvar))
    }

    function Limpar () {
        setListapresenca([])
        // localStorage.setItem('Nomesalvo', JSON.stringify([])) um jeito de apagar
        //jeito correto de apagar
        localStorage.removeItem('Nomesalvo')
    }


    return(
        <div>
            <h1>Lista de Presença do Churrasco</h1>
            <input type="text" onChange={(event) => setNome(event.target.value)} value={nome}  placeholder="Digite seu nome" />
            <button onClick={Adicionar}>Adicionar</button>

            {
                listaPresenca.map( (pessoa, index) => (
                    <Aula09_nome key={index} pessoa={pessoa}/>
        ))
            }

            <button onClick={Limpar} >Limpar</button>
        
        </div>
    )
}

export default Aula09_ListaNomes;