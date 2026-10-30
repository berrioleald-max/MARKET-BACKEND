const usuarios =  {}

usuarios.post = (req, res) => {
    res.json({
        msg: 'POST - usuarios'
    })
}

usuarios.get = (req, res) => {
    res.json({
        msg: 'GET - usuarios'
    })
}

usuarios.put = (req, res) => {
    res.json({
        msg: 'PUT - usuarios'
    })
}

usuarios.delete = (req, res) => {
    res.json({
        msg: 'DELETE - usuarios'
    })
}

usuarios.patch = (req, res) => {
    res.json({
        msg: 'PATCH - usuarios'
    })
}

export default usuarios;
