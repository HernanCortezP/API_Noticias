"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Esto funciona');
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const noticiasRoutes_1 = __importDefault(require("./routes/noticiasRoutes"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.port || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json()); //los datos los recibimos a traves de este middleware, lo que hace es agregar los datos del cuerpo en un objeto request.body 
        //el metodo .json lo que hace es poder aceptar formatos json por parte del cliente
        //en el cliente (angular) cuando yo quiero crear una nueva noticia el me lo va a enviar en formato json, y el servidor tambien lo respondera con el mismo formato
        this.app.use(express_1.default.urlencoded({ extended: false })); //este es en caso de que nosotros querramos enviar desde un formulario html
    }
    routes() {
        this.app.use('/', indexRoutes_1.default); //aqui voy a utilizar el enrutador de indexRoutes
        this.app.use('/api/noticias', noticiasRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server(); //este objeto se va a guardar en una constante llamada server
server.start();
