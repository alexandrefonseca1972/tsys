const express = require("express");
const ConceitoController = require('../controllers/ConceitoController');

const Router = express.Router();

Router.post("/api/conceito/", ConceitoController.store);
Router.get("/api/conceito/:id", ConceitoController.indexon);
Router.get("/api/conceito/", ConceitoController.index);
Router.get("/api/conceito/vb/:vb", ConceitoController.indexvb);
Router.delete("/api/conceito/", ConceitoController.indeall);
Router.put("/api/conceito/:id", ConceitoController.update);

module.exports = Router;
