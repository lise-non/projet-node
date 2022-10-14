import express, {Request, Response} from 'express';

import { get } from 'http'
import { RecipeController } from '../controllers/RecipiesControllers';
import * as Auth from '../middleware/authenticate'


const recipesController = new RecipeController();

export const router = express.Router({
    strict : true
})

router.route('recipe/show/list').get(Auth.authorize(['getRecipeList']), recipesController.read)
// router.route('/recipe/show/:id').get(recipesController.read);