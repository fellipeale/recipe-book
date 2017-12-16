import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-form-item',
  templateUrl: './recipe-form-item.component.html',
  styleUrls: ['./recipe-form-item.component.css']
})
export class RecipeFormItemComponent implements OnInit {

  @Input() title: string;
  @Input() step: string;
  @Input() values: string[]; 

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.values.push('');
  }

  removeItem(index: number) {
    this.values.splice(index, 1);
  }

  showRemoveButton(): boolean {
    return this.values.length > 1;
  }

}
