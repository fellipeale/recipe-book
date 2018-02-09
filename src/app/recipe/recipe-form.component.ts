import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Recipe } from './recipe.type';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  @Input() recipeId?: number;

  recipesCollection: AngularFirestoreCollection<Recipe>;
  recipe: Recipe;

  constructor(private db: AngularFirestore, private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {
    this.recipesCollection = db.collection<Recipe>('recipes');
  }

  ngOnInit() {
    this.recipe = new Recipe();
    this.recipe.ingredients = [''];
    this.recipe.steps = [''];
  }

  save() {
    this.authService.user
      .subscribe(user => {
        this.recipe.owner = user && user.uid;
        this.recipe.id = this.db.createId();
        this.recipesCollection.add(JSON.parse(JSON.stringify(this.recipe)))
          .then(() =>  {
            this.snackBar.open('Receita salva', 'Fechar', {
              duration: 2000
            });
            this.router.navigate(['']);
          })
          .catch(err => {
            this.snackBar.open('Autentique-se para salvar a receita', 'Fechar', {
              duration: 2000
            });
            console.log(err);
          });
      });
  }

}
