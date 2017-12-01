import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeUrlComponent } from './recipe-url.component';

describe('RecipeUrlComponent', () => {
  let component: RecipeUrlComponent;
  let fixture: ComponentFixture<RecipeUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
