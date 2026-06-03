const Usuario = require("../models/Usuario");

exports.criarUsuario = async (req, res) => {

    try {

        const { nome, email, senha } = req.body;

        if (!nome || nome.length < 3) {
            return res.status(400).json({
                msg: "nome muito curto man"
            });
        }

        if (!email) {
            return res.status(400).json({
                msg: "email obrigatorio"
            });
        }

        if (!senha || senha.length < 6) {
            return res.status(400).json({
                msg: "senha precisa ter 6 caracteres"
            });
        }

        const usuario = await Usuario.create({
            nome,
            email,
            senha
        });

        res.status(201).json(usuario);

    } catch (erro) {

        res.status(500).json({
            erro: erro.message
        });

    }

};

// listar usuarios
exports.listarUsuarios = async (req, res) => {

    try {

        const usuarios = await Usuario.find();

        res.json(usuarios);

    } catch (erro) {

        res.status(500).json({
            erro: erro.message
        });

    }

};

// buscar usuario
exports.buscarUsuario = async (req, res) => {

    try {

        const usuario = await Usuario.findById(req.params.id);

        res.json(usuario);

    } catch (erro) {

        res.status(500).json({
            erro: erro.message
        });

    }

};

// atualizar usuario
exports.atualizarUsuario = async (req, res) => {

    try {

        const usuario = await Usuario.findByIdAndUpdate(

            req.params.id,
            req.body,
            { new: true }

        );

        res.json(usuario);

    } catch (erro) {

        res.status(500).json({
            erro: erro.message
        });

    }

};

// deletar usuario
exports.deletarUsuario = async (req, res) => {

    try {

        await Usuario.findByIdAndDelete(req.params.id);

        res.json({
            msg: "usuario removido"
        });

    } catch (erro) {

        res.status(500).json({
            erro: erro.message
        });

    }

};