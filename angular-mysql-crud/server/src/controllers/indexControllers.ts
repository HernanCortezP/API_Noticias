import {Request, Response} from 'express';

class IndexController{

    index  (req: Request,res:Response){
        res.json({text: 'API esta en /api/noticias'});

    } 
}

export const indexController= new IndexController(); //exportando el controlador instanciado, toda la clase no solamente un metodo en especifico