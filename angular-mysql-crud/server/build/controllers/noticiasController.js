"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class NoticiasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const noticias = yield database_1.default.query('SELECT * FROM noticias');
            res.json(noticias);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //cuando se le envie una peticion voy a enviarle un id, este se utilizara para consultar las noticias, la noticia que devuelva la BD se guardaran en la constante noticias
            const { id } = req.params; //a esto se le conoce como destructuring en JS, es decir obtener solo una parte de un objeto en este caso solo el id
            const noticias = yield database_1.default.query('SELECT * FROM noticias WHERE id = ?', [id]);
            if (noticias.length > 0) { //con esto solo vamos a obtener un objeto, ya no tendremos un arreglo con un objeto, sino simplemente un objeto
                return res.json(noticias[0]);
            }
            console.log(noticias);
            res.status(404).json({ text: 'La noticia no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO noticias set ?', [req.body]); //a este metodo se le indica que será asincrono con await y se convierte en una promesa 
            //las consultas a las BD son eventos asincronos, es decir tomaran su tiempo en realizarse. De esta manera cuando termine con lo de arriba sigue con el codigo de abajo
            console.log(req.body); //REQ.BODY tendra los valores de los datos que nos esta enviando el cliente (la app en angular)
            res.json({ message: 'noticia guardada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM noticias WHERE id = ?', [id]);
            res.json({ text: 'La noticia:' + req.params.id + 'Fue eliminada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE noticias SET ? WHERE id = ?', [req.body, id]);
            res.json({ text: 'La noticia Fue actualizada' });
        });
    }
}
const noticiasController = new NoticiasController();
exports.default = noticiasController;