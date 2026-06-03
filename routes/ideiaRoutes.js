const express = require("express");
const router = express.Router();
const IdeiaController = require("../controllers/IdeiaController");



// criar
router.post("/", IdeiaController.criarIdeia);

// listar
router.get("/", IdeiaController.listarIdeias);

// buscar ideia pelo id
router.get("/:id", IdeiaController.buscarIdeia);

// atualizar
router.put("/:id", IdeiaController.atualizarIdeia);
// remover

router.delete("/:id", IdeiaController.deletarIdeia);




module.exports = router;