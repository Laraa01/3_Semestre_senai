const Aula03_Login = () => {
    return (
        <div style={estilos.card}>
            <img style={estilos.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/SENAI_S%C3%A3o_Paulo_logo.png/1280px-SENAI_S%C3%A3o_Paulo_logo.png" alt="" />
            <h1 style={estilos.login}>Login</h1>

            <div style={estilos}>
                <label style={estilos.label}>Email</label>
                <input type="text" placeholder='Digite seu Email' style={estilos.card2} />
            </div>

            <div style={estilos}>
                <label style={estilos.label}>Senha</label>
                <input type="password" placeholder='Digite sua senha' style={estilos.card2} />
            </div>
            <button style={estilos.botao}>Entrar</button>
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