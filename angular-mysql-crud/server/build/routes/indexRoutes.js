"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexControllers_1 = require("../controllers/indexControllers");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config(); //con esto al enrutador le agrega la ruta de abajo
    }
    config() {
        this.router.get('/', indexControllers_1.indexController.index);
    }
}
const indexRoutes = new IndexRoutes(); //Instancia de la clase
exports.default = indexRoutes.router;
