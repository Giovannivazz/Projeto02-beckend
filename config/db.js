const mongoose = require("mongoose");

require("dotenv").config();

// funcao responsavel pela conexao
async function conectarBanco() {

    try {

        await mongoose.connect(process.env.MONGO_URI);

        console.log("conectado no mongo man");

    } catch (erro) {

        console.log("deu ruim pra conectar no mongo");

        

    console.log(erro.message);

    }

}

module.exports = conectarBanco;