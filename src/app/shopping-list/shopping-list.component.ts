import { Component, OnInit, OnDestroy } from '@angular/core';

import {ingredient} from '../shared/ingredients.model'
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
	ingredients:ingredient[];
	private igChangeSub:Subscription

	constructor(private slService:ShoppingListService) { }

	ngOnInit() {
		this.ingredients=this.slService.getIngredients();
		this.igChangeSub=this.slService.ingredientsChanged
		.subscribe(
			(ingredients:ingredient[])=>{
				this.ingredients=ingredients
			}
		);
	}
	
    ngOnDestroy() {
		this.igChangeSub.unsubscribe();
	}
}
