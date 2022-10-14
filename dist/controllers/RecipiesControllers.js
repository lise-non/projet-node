"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeController = void 0;
const recipe_1 = require("../models/recipe");
const CrudControllers_1 = require("./CrudControllers");
class RecipeController extends CrudControllers_1.CrudController {
    async read(req, res) {
        recipe_1.Recipe.findByPk(req.params.id).then(recipe => res.json(recipe)).catch(error => { console.log(error); res.json('erreur'); });
    }
}
exports.RecipeController = RecipeController;
