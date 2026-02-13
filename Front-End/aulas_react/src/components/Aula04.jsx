import { estilos } from "../style/Estilos"
import Aula04_IMC from "./Aula04_IMC"
import Aula04_filmes from "./Aula04_filmes"

const Aula04 = () => {
    return(
        <div style={estilos.cardAula}>
            <h2>Aula 04 - Props</h2>
            <h3>Props são usadas para criação de componentes reutilizáveis e suas estilizações</h3>
            <hr />

            <Aula04_IMC nome='Jorge' peso={80} altura={1.80} cor="#25f6c1"/>
            <Aula04_IMC nome='Dudinha' peso={40} altura={1.55} cor="#7d3b7a"/>
            <Aula04_IMC nome='Ana' peso={60} altura={1.60} cor="#ff3"/>
            <hr />
            <hr />
            <h3>Filmes</h3>

            <div style={{display: 'flex', gap: '15px', flex: 'wrap'}}>
             <Aula04_filmes imagem="https://i.pinimg.com/736x/1a/a0/3a/1aa03ab10616270ddd7be460f1028e72.jpg" nome='Harry Potter e o Prisioneiro de Azkaban' genero="Fantasia, Aventura, Ficção"/>
             <Aula04_filmes imagem="https://i.pinimg.com/736x/7e/1b/f9/7e1bf9e320e3ef6a4278d7ae113a3b3f.jpg" nome='Coraline e o Mundo
             Secreto' genero="Fantasia sombria, Terror infantojuvenil e Suspense"/> 
             <Aula04_filmes imagem="https://i.pinimg.com/736x/a0/7f/68/a07f6843a5e1504b8f4b3ca7c3d18bf2.jpg" nome='O Segredo das Fadas' genero=" Animação, Fantasia, Família"/> 
             <Aula04_filmes imagem="https://i.pinimg.com/1200x/e0/4b/a9/e04ba92a324b0321dd456f17878caaa7.jpg" nome='Moana: Um Mar de Aventuras' genero=" Animação, Ação, Família"/>
             </div>
        </div>

    )
}

export default Aula04