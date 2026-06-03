const express = require("express");

//conexao mongo
const conectarBanco = require("./config/db");

// importa rotas
const usuarioRoutes = require("./routes/usuarioRoutes");
const videoRoutes = require("./routes/videoRoutes");
const ideiaRoutes = require("./routes/ideiaRoutes");

const app = express();



// conecta bd
conectarBanco();


app.use(express.json());


app.use("/usuarios", usuarioRoutes);
app.use("/videos", videoRoutes);
app.use("/ideias", ideiaRoutes);


app.get("/", (req, res) => {

    res.send("api rodando man");

});

// porta servidor
const PORT = process.env.PORT || 3000;

// inicia servidor
app.listen(PORT, () => {

    console.log(`servidor rodando na porta ${PORT}`);

    
});