import { Component, OnInit, ElementRef,ViewChild} from '@angular/core';
import { ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
	//with Viewchild we cann access the template ref #templateName and the value 
	@ViewChild('nameInput',{static:false}) nameInputRef:ElementRef;
	@ViewChild('amountInput',{static:false}) amountInputRef:ElementRef;


	constructor(private slService:ShoppingListService) { }

	ngOnInit() {
	}
	onAddItem() {
		const ingName=this.nameInputRef.nativeElement.value;
		const ingAmount=this.amountInputRef.nativeElement.value;
		const newIngredient=new ingredient(ingName,ingAmount)
		this.slService.onAddIngredient(newIngredient);
	}

}
