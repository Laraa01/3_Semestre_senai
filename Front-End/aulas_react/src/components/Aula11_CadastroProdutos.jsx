import { estilos } from "../style/Estilos"
import { useState } from "react"
import Aula11_Produto from "./Aula11_Produto"

const Aula11_CadastroProdutos = () => {

    const [ listaProdutos, setListaProdutos ] = useState([
        {
            nomeProduto: "LOL Surprise",
            preco: 199.99,
            linkProduto: "https://www.rihappy.com.br/boneca-lol-surprise-sparkle-series-7-surpresas-candide-8928-1002882996/p?idsku=1002749620&srsltid=AfmBOormNYLfyqk7AI5lN9k9so-EAm1OV2JLssQQ0mXdMd6mYCsfyqhvcdE",
            linkImagem: "https://i.pinimg.com/736x/e1/9a/45/e19a452be45df2d908e241fa29b787b7.jpg",
            categoria: "Brinquedo",
            freteGratis: true
        },
        {
            nomeProduto: "Harry Potter e a Câmara Secreta",
            preco: 37.80,
            linkProduto: "https://www.amazon.com.br/Harry-Potter-C%C3%A2mara-Secreta-Rowling/dp/8532530796/ref=asc_df_8532530796?mcid=a77037b9fcde3e37bc28d8880a00dcf7&tag=googleshopp00-20&linkCode=df0&hvadid=721147801917&hvpos=&hvnetw=g&hvrand=17085554742359644627&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9100681&hvtargid=pla-2374768378214&psc=1&gad_source=1",
            linkImagem: "https://i.pinimg.com/736x/e8/3d/ba/e83dba9962d5fcea74087eafc6e00cfb.jpg",
            categoria: "Livros",
            freteGratis: false
        },

        {
            nomeProduto: "Apple 2025 iPad",
            preco: 3.699,
            linkProduto: "amazon.com.br/Apple-2025-iPad-Wi-Fi-128/dp/B0DZK3M8GJ/ref=asc_df_B0DZK3M8GJ?mcid=dde4ecf83ad83170b55c0ad1dd5c7010&tag=googleshopp00-20&linkCode=df0&hvadid=709884378406&hvpos=&hvnetw=g&hvrand=7320827711485517352&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9100681&hvtargid=pla-2423897514901&psc=1&language=pt_BR&gad_source=1",
            linkImagem: "https://i.pinimg.com/736x/ce/cd/c9/cecdc9d8c8e2d762eeed4bbabef17a89.jpg",
            categoria: "Eletrônicos",
            freteGratis: true
        }
    ])
    const [ nomeProduto, setNomeProduto ] = useState('')
    const [ preco, setPreco ] = useState('')
    const [ linkProduto, setLinkProduto ] = useState('')
    const [ linkImagem, setLinkImagem ] = useState('')
    const [ categoria, setCategoria ] = useState('')
    const [ freteGratis, setFreteGratis ] = useState(false)

    return(
        <div>
            <h1>Cadastro de Produto</h1>

            <div style={{display: 'flex', flexDirection: 'column', gap:10, border: '1px, solid #ccc', padding: 20, width: 220}}>
                <input type="text" placeholder="Nome" value={nomeProduto} 
                onChange={(event) => setNomeProduto(event.target.value) } />

                <input type="text" placeholder="Preço" value={preco}
                onChange={(event) => setPreco(event.target.value)} />

                <input type="text" placeholder="URL de imagem" value={linkImagem} 
                onChange={(event) => setLinkImagem(event.target.value)}/>

                <input type="text" placeholder="Link do Produto" value={linkProduto}
                onChange={(event) => setLinkProduto(event.target.value)} />

                <select value={categoria} onChange={(event) => setCategoria(event.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value='Eletrônicos'>Eletrônicos</option>
                    <option value='Brinquedos'>Brinquedos</option>
                    <option value='Livros'>Livros</option>
                </select>

                <span> <input type="checkbox" checked={freteGratis}
                onChange={(event) => setFreteGratis(event.target.value)}/> Frete Grátis </span>  

                <button style={{backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '4px'}} >Adicionar</button>

                <hr />
                <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
                    {
                        listaProdutos.map( (produto, pos) => (
                            <Aula11_Produto key={pos} produto={produto}/>
                        ) )
                    }
                </div>

            </div>

        </div>
    )
}



export default Aula11_CadastroProdutos