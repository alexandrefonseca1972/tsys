const express = require("express");
const ConceitoController = require('../controllers/ConceitoController');

const Router = express.Router();

Router.post("/api/conceito/", ConceitoController.store);

module.exports = Router;