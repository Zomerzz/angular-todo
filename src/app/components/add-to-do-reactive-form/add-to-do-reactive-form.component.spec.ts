import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToDoReactiveFormComponent } from './add-to-do-reactive-form.component';

describe('AddToDoReactiveFormComponent', () => {
  let component: AddToDoReactiveFormComponent;
  let fixture: ComponentFixture<AddToDoReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddToDoReactiveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToDoReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
