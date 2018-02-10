import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';

import { Recipe } from './recipe.type';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input() recipe: Recipe;

  recipeCoverURL: Observable<string>;

  constructor(private storage: AngularFireStorage) { }

  ngOnInit() {
    const ref = this.storage.ref(`/recipeCovers/${this.recipe.cover ? this.recipe.cover : 'default'}`);
    this.recipeCoverURL = ref.getDownloadURL();
  }

}
