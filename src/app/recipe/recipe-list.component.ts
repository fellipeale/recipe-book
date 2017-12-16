import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  numbers = [1, 2, 3, 4, 5, 6, 7];

  constructor() { }

  ngOnInit() {
  }

}
