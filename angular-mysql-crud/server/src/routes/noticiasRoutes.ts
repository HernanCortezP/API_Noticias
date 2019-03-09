import {Router} from 'express';
import noticiasController from '../controllers/noticiasController';
class NoticiasRoutes{
public router: Router= Router();

constructor(){
this.config(); //con esto al enrutador le agrega la ruta de abajo

}
config(): void{
this.router.get('/', noticiasController.list );
this.router.get('/:id', noticiasController.getOne);
this.router.post('/', noticiasController.create);
this.router.put('/:id', noticiasController.update);
this.router.delete('/:id', noticiasController.delete);
}
}

const noticiasRoutes= new NoticiasRoutes(); //Instancia de la clase
export default noticiasRoutes.router; //aqui estamos devolviendo o exportando la propiedad router para poder usarla en el index.ts