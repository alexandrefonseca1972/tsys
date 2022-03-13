const mongoose = require('../database');

const ConceitoSchema = new mongoose.Schema({
    verbete: String,
    conceito: String,
    referencia: String,
    experiencia: String,
    npat: String,
});


const Conceito = mongoose.model('Conceito', ConceitoSchema);

module.exports = Conceito;