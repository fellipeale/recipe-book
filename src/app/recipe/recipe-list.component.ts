import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Recipe } from './recipe.type';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipesCollection: AngularFirestoreCollection<Recipe>;
  recipesList: Observable<Recipe[]>;

  constructor(private db: AngularFirestore) {
    this.recipesCollection = db.collection<Recipe>('recipes', ref => ref.orderBy('lastUpdated', 'desc'));
  }

  ngOnInit() {
    this.recipesList = this.recipesCollection.valueChanges();
  }

}
