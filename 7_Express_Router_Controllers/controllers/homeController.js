exports.paginaIniciAL = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome" />
            <button>Enviar</button>
        </form>
    `)
}

exports.envioInput = (req, res) => {
    res.send(`O que voce me enviou foi: ${req.body.nome}`)
}