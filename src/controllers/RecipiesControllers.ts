import { sequelize } from "../config/database";
import { Recipe } from "../models/recipe";
import { CrudController } from "./CrudControllers";

export class RecipeController extends CrudController{

   
    public async read(req: Request, res: Response): void{

        Recipe.findByPk(req.params.id).then(recipe => res.json(recipe)).catch(error => {console.log(error); res.json('erreur');})
    }

}