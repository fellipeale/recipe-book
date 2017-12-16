import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFormItemComponent } from './recipe-form-item.component';

describe('RecipeFormItemComponent', () => {
  let component: RecipeFormItemComponent;
  let fixture: ComponentFixture<RecipeFormItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeFormItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
