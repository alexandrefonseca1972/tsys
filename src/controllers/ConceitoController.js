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
    async indexon(req, res) {
        const conceito = await Conceito.findById({ _id: req.params.id });

        if (conceito) {
            return res.status(200).json(conceito);
        }
        else {
            return res.status(400).json({ mensagem: "conceito não encontrado" })
        }
    }
    async index(req, res) {
        const conceito = await Conceito.find().sort({ verbete: 1 });

        if (conceito) {
            return res.status(200).json(conceito);
        }
        else {
            return res.status(400).json({ mensagem: "não existe informação para essa consulta" })
        }
    }
    async indexvb(req, res) {
        const conceito = await Conceito.find({ verbete: req.params.vb });

        if (conceito) {
            return res.status(200).json(conceito);
        }
        else {
            return res.status(400).json({ mensagem: "não existe informação para essa consulta" })
        }
    }
    async indeall(req, res) {

        await Conceito.remove({});
        return res.status(200).json({ msg: "Todos os registros foram apagados" });
    }
}

module.exports = new ConceitoController();