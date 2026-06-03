const Video = require("../models/Video");

// criar video novo
exports.criarVideo = async (req, res) => {

    try {

        const { titulo, categoria, views } = req.body;

        // ve se veio titulo
        if (!titulo) {

            return res.status(400).json({
                msg: "titulo obrigatorio man"
            });

        }
      
        if (!categoria) {

            return res.status(400).json({
                msg: "categoria obrigatoria"
            });

        }

        const video = await Video.create({

            titulo,
            categoria,
            views

        });

        res.status(201).json(video);

    } catch (erro) {

        res.status(500).json({
            erro: erro.message
        });

    }

};

// listar todos 
exports.listarVideos = async (req, res) => {

    try {

        const videos = await Video.find();

        res.json(videos);

    } catch (erro) {

        res.status(500).json({
            erro: erro.message
        });

    }

};





// buscar um video pelo id
exports.buscarVideo = async (req, res) => {

    try {

        const video = await Video.findById(req.params.id);

        res.json(video);

    } catch (erro) {

        res.status(500).json({
            erro: erro.message
        });

    }

};





// atualizar video
exports.atualizarVideo = async (req, res) => {

    try {

        const video = await Video.findByIdAndUpdate(

            req.params.id,
            req.body,
            { new: true }

        );

        res.json(video);

    } catch (erro) {

        res.status(500).json({
            erro: erro.message
        });

    }

};

// excluir video
exports.deletarVideo = async (req, res) => {

    try {

        await Video.findByIdAndDelete(req.params.id);

        res.json({
            msg: "video removido"
        });

    } catch (erro) {

        res.status(500).json({
            erro: erro.message
        });

    }

};