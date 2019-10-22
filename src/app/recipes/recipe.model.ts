import { ingredient } from '../shared/ingredients.model';

export class Recipe {
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredients:ingredient[];
    
    //constructor is a built in function every class has
    //it is executed when we create new instance of the class
    constructor(name:string,desc:string,imagePath:string,ingredients:ingredient[]){
        this.name=name;
        this.description=desc;
        this.imagePath=imagePath;
        this.ingredients=ingredients
    }
}