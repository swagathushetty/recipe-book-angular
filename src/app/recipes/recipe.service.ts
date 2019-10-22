import { Injectable} from '@angular/core'
import {Subject} from 'rxjs'
import {Recipe} from './recipe.model'
import { ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
		
	//Recipe[] is the class in recipe.model.ts
	recipes:Recipe[]=[
		new Recipe('a test recipe','this is simply a test','https://paleoglutenfree.com/wp-content/uploads/2018/06/paleo-lunch-pitas-5-of-16-695x1024.jpg',
		[
			new ingredient('meat,',1),
			new ingredient('frech fries',20)
		]),
		new Recipe('another test recipe','this is simply a test','https://paleoglutenfree.com/wp-content/uploads/2018/06/paleo-lunch-pitas-5-of-16-695x1024.jpg',
		[
			new ingredient('buns',2),
			new ingredient('meat',1)
		])
	];
	constructor(private slService:ShoppingListService){

	}
	
	getRecipes(){
		return this.recipes.slice(); //slice wii give the copy of this array to outside
	}

	getRecipe(id:number){
		return this.recipes[id];
	}

	addIngredientsToShoppingList(ingredients:ingredient[]){
		this.slService.addIngredients(ingredients)
	}
}