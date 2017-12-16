import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.type';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  recipe: Recipe;

  constructor() { } 

  ngOnInit() {
    this.recipe = new Recipe();
    this.recipe.ingredients = [''];
    this.recipe.steps = [''];
  }

}
