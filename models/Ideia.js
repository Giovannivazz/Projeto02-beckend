const mongoose = require("mongoose");

const IdeiaSchema = new mongoose.Schema({

    titulo: {
        type: String,
        required: true
    },

    descricao: {
        type: String,
        required: true,
        minlength: 10
    }

});

// exporta o model certinho
module.exports = mongoose.model("Ideia", IdeiaSchema);