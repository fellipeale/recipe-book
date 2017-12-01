import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-recipe-url',
  templateUrl: './recipe-url.component.html',
  styleUrls: ['./recipe-url.component.css'],
  animations: [
    trigger('cardGrow', [
      state('in', style({
        overflow: 'hidden',
        height: '*'
      })),
      state('out', style({
        overflow: 'hidden',
        height: '0px',
        opacity: '0'
      })),
      transition('in <=> out', animate('500ms ease-in-out'))
    ])
  ]
})
export class RecipeUrlComponent implements OnInit {
  cardState: String;

  constructor() { }

  ngOnInit() {
  }

  cardStateIn() {
    this.cardState = 'in';
  }

  cardStateOut() {
    this.cardState = 'out';
  }

}
