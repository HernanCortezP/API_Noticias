"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'API esta en /api/noticias' });
    }
}
exports.indexController = new IndexController(); //exportando el controlador instanciado, toda la clase no solamente un metodo en especifico
