const Ideia = require("../models/Ideia");

// criar uma ideia nova
exports.criarIdeia = async (req, res) => {

    try {

        const { titulo, descricao } = req.body;

        // verificar titulo
        if (!titulo) {

            return res.status(400).json({
                msg: "titulo obrigatorio"
            });

        }

        // descricao nao pode ser muito curta
        if (!descricao || descricao.length < 10) {

            return res.status(400).json({
                msg: "descricao muito curta man"
            });

        }

        const ideia = await Ideia.create({

            titulo,
            descricao

        });

        res.status(201).json(ideia);

    } catch (erro) {

        res.status(500).json({
            erro: erro.message
        });

    }

};

// lista tudo
exports.listarIdeias = async (req, res) => {

    try {

        const ideias = await Ideia.find();

        res.json(ideias);

    } catch (erro) {

        res.status(500).json({
            erro: erro.message
        });

    }

};

// busca uma ideia
exports.buscarIdeia = async (req, res) => {

    try {

        const ideia = await Ideia.findById(req.params.id);

        res.json(ideia);

    } catch (erro) {

        res.status(500).json({
            erro: erro.message
        });

    }

};

// atualiza uma ideia
exports.atualizarIdeia = async (req, res) => {

    try {

        const ideia = await Ideia.findByIdAndUpdate(

            req.params.id,
            req.body,
            { new: true }

        );

        res.json(ideia);

    } catch (erro) {

        res.status(500).json({
            erro: erro.message
        });

    }

};

// remove ideia
exports.deletarIdeia = async (req, res) => {

    try {

        await Ideia.findByIdAndDelete(req.params.id);

        res.json({
            msg: "ideia removida"
        });

    } catch (erro) {

        res.status(500).json({
            erro: erro.message
        });

    }

};