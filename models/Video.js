

const mongoose = require("mongoose");
const VideoSchema = new mongoose.Schema({

    titulo: {
        type: String,
        required: true
    },

    categoria: {
        type: String,
        required: true
    },

    views: {
        type: Number,
        default: 0
    }

});

module.exports = mongoose.model("Video", VideoSchema);