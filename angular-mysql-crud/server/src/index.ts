console.log('Esto funciona');
import indexRoutes from './routes/indexRoutes';
import noticiasRoutes from './routes/noticiasRoutes';
import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
class Server { //esta clase iniciara al sv
    public app: Application;
    constructor(){ //este es para inicializar la aplicacion express
this.app= express();
this.config();
this.routes();
   }

config(): void{
this.app.set('port', process.env.port || 3000);
this.app.use(morgan('dev'));
this.app.use(cors());
this.app.use(express.json()); //los datos los recibimos a traves de este middleware, lo que hace es agregar los datos del cuerpo en un objeto request.body 
//el metodo .json lo que hace es poder aceptar formatos json por parte del cliente
//en el cliente (angular) cuando yo quiero crear una nueva noticia el me lo va a enviar en formato json, y el servidor tambien lo respondera con el mismo formato
this.app.use(express.urlencoded({extended: false})); //este es en caso de que nosotros querramos enviar desde un formulario html
}

routes(): void{
this.app.use('/', indexRoutes); //aqui voy a utilizar el enrutador de indexRoutes
this.app.use('/api/noticias', noticiasRoutes);

}

start(): void{
this.app.listen(this.app.get('port'),()=>{
console.log('Server on port', this.app.get('port'));

});

}

}

const server = new Server(); //este objeto se va a guardar en una constante llamada server
server.start();