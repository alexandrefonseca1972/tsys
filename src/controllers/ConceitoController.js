const Conceito = require('../models/Conceitos');


class ConceitoController {
    async store(req, res) {
        let {
            verbete, conceito, experiencia, referencia, npat
        } = (req.body);

        await Conceito.create({
            verbete, conceito, experiencia, referencia, npat
        });
        return res.json({ verbete, conceito, experiencia, referencia, npat })
    }
}

module.exports = new ConceitoController();