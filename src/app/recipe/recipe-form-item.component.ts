import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-form-item',
  templateUrl: './recipe-form-item.component.html',
  styleUrls: ['./recipe-form-item.component.css']
})
export class RecipeFormItemComponent implements OnInit {

  itemValues: string[];
  @Input() title: string;
  @Input() step: string;
  @Input()
  get values() {
    return this.itemValues;
  }

  set values(val) {
    this.itemValues = val;
    this.valuesChange.emit(this.itemValues);
  }

  @Output() valuesChange = new EventEmitter();

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

  onValueUpdate(value: string, index: number) {
    this.itemValues[index] = value;
  }

}
