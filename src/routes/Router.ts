import express, {Request, Response} from 'express';

import { get } from 'http'
import { RecipeController } from '../controllers/RecipiesControllers'


const recipesController = new RecipeController();

export const router = express.Router({
    strict : true
})

router.route('/recipe/show/:id').get(recipesController.read);