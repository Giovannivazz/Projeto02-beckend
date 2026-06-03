
const mongoose = require("mongoose");
const UsuarioSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true,
        minlength: 3
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    senha: {
        type: String,
        required: true,
        minlength: 6
    }

});

module.exports = mongoose.model("Usuario", UsuarioSchema);
