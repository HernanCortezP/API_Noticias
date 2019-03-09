import {Router} from 'express';
import {indexController} from '../controllers/indexControllers';

class IndexRoutes{
public router: Router= Router();

constructor(){
this.config(); //con esto al enrutador le agrega la ruta de abajo

}
config(): void{
this.router.get('/', indexController.index );

}
}

const indexRoutes= new IndexRoutes(); //Instancia de la clase
export default indexRoutes.router;