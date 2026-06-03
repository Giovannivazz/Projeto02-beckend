

const express = require("express");
const router = express.Router();
const VideoController = require("../controllers/VideoController");



// criar 
router.post("/", VideoController.criarVideo);


// listar 
router.get("/", VideoController.listarVideos);


// buscar pelo id
router.get("/:id", VideoController.buscarVideo);

// atualizar 
router.put("/:id", VideoController.atualizarVideo);

// deletar 
router.delete("/:id", VideoController.deletarVideo);




module.exports = router;