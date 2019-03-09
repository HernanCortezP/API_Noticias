"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const noticiasController_1 = __importDefault(require("../controllers/noticiasController"));
class NoticiasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config(); //con esto al enrutador le agrega la ruta de abajo
    }
    config() {
        this.router.get('/', noticiasController_1.default.list);
        this.router.get('/:id', noticiasController_1.default.getOne);
        this.router.post('/', noticiasController_1.default.create);
        this.router.put('/:id', noticiasController_1.default.update);
        this.router.delete('/:id', noticiasController_1.default.delete);
    }
}
const noticiasRoutes = new NoticiasRoutes(); //Instancia de la clase
exports.default = noticiasRoutes.router; //aqui estamos devolviendo o exportando la propiedad router para poder usarla en el index.ts
