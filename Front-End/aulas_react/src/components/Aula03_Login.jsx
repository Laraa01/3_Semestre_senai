import { useState } from 'react';

const Aula03_Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [mensagem, setMensagem] = useState('')

    const botaoEntrar = () => {
        if (email == 'senai@senai.br' && senha == '123') {
            setMensagem('Login bem sucedido')
        } else {
            setMensagem('Email ou senha incorreta')
        }
    }

    return (
 <div style={estilos.card}>
            <img style={estilos.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/SENAI_S%C3%A3o_Paulo_logo.png/1280px-SENAI_S%C3%A3o_Paulo_logo.png" alt="" />
            <h1 style={estilos.login}>Login</h1>


 <div style={estilos}>
                <label style={estilos.label}>Email</label>
         <input type="text" placeholder='Digite seu email' style={estilos.card2} 
         onChange={(event) => setEmail(event.target.value)} value={email} />
             </div> 

            <div style={estilos}>
                <label style={estilos.label}>Senha</label>
         <input type="password" placeholder='Digite sua senha' style={estilos.card2} 
         onChange={(event) => setSenha(event.target.value)} value={senha}/>
             </div>  
            <button onClick={botaoEntrar} style={estilos.botao}>Entrar</button>
            <p style={{fontStyle: 'bold'}}>{mensagem}</p>
       
     </div>
    )
}

/** @type {{ [key: string]: import('react').CSSProperties }} */
const estilos = {

    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        margin: '0 auto',
        backgroundColor: 'white',
        padding: '15px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
         borderRadius: '8px',
         gap: '5px'
    },

    login: {
        color: 'red',
        fontStyle: 'oblique'
    },
    img: {
        height: '50px',
    },
    botao: {
        backgroundColor: 'red',
        color: 'white',
        borderRadius: 5,
        border:  'none',
        width: '10%',
        padding: '6px'

    },
    label: {
        display: 'block',
        fontWeight: 'bold',
        fontStyle: 'oblique'
    },
    input: {
        width: '100%',
        padding: '8%',
        borderRadius: '4px',

    },
    card2: {
        width: '100%',
        height: '30px'
    }
}

export default Aula03_Login