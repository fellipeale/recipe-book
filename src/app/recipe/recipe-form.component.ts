import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { v4 as uuid } from 'uuid';

import { AuthService } from '../auth/auth.service';
import { Recipe } from './recipe.type';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  @Input() recipeId?: number;

  recipesCollection: AngularFirestoreCollection<Recipe>;
  recipe: Recipe;
  recipeCover: File;

  constructor(private db: AngularFirestore, private storage: AngularFireStorage, private authService: AuthService,
    private router: Router, private snackBar: MatSnackBar) {
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
        this.recipe.created = this.recipe.lastUpdated = new Date();
        this.uploadFile();
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

  selectFile(event) {
    this.recipeCover = event.target.files[0];
  }

  uploadFile() {
    if (this.recipeCover) {
      this.recipe.cover = uuid();
      const filePath = `/recipeCovers/${this.recipe.cover}`;
      const task = this.storage.upload(filePath, this.recipeCover);
      task.then()
        .then(() => {
          this.snackBar.open('Arquivo salvo', 'Fechar', {
            duration: 2000
          });
        });
    }
  }

}
