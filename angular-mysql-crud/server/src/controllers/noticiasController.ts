import {Request, Response} from 'express';
import pool from '../database';
class NoticiasController{

    public async list  (req: Request,res:Response){ //este es para listar o consultar todas las noticias
       const noticias = await pool.query('SELECT * FROM noticias');
       res.json(noticias);

    }

    public async getOne  (req: Request,res:Response): Promise<any>{ //este para consultar o listar solo una noticia
//cuando se le envie una peticion voy a enviarle un id, este se utilizara para consultar las noticias, la noticia que devuelva la BD se guardaran en la constante noticias
    const {id} = req.params;  //a esto se le conoce como destructuring en JS, es decir obtener solo una parte de un objeto en este caso solo el id
    const noticias = await pool.query('SELECT * FROM noticias WHERE id = ?', [id]); 
    if (noticias.length > 0) { //con esto solo vamos a obtener un objeto, ya no tendremos un arreglo con un objeto, sino simplemente un objeto
      return res.json(noticias[0]);
    }
    console.log(noticias);
    res.status(404).json({text: 'La noticia no existe'});

   }

      public async create(req: Request, res:Response): Promise<void> {
       await pool.query('INSERT INTO noticias set ?', [req.body]); //a este metodo se le indica que será asincrono con await y se convierte en una promesa 
       //las consultas a las BD son eventos asincronos, es decir tomaran su tiempo en realizarse. De esta manera cuando termine con lo de arriba sigue con el codigo de abajo
       console.log(req.body); //REQ.BODY tendra los valores de los datos que nos esta enviando el cliente (la app en angular)
       res.json({message:'noticia guardada'});

     }

     public async delete(req: Request, res:Response): Promise<void>{
      const {id} = req.params;
      await pool.query('DELETE FROM noticias WHERE id = ?' ,[id]);
res.json({text:'La noticia:'+req.params.id+'Fue eliminada'});

    }

    public async update(req: Request, res:Response): Promise<void>{
      const { id } = req.params;
      await pool.query('UPDATE noticias SET ? WHERE id = ?', [req.body, id]);
res.json({text:'La noticia Fue actualizada'});

    }

}

const noticiasController = new NoticiasController();
export default noticiasController;