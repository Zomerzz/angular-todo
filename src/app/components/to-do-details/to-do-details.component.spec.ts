import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoDetailsComponent } from './to-do-details.component';

describe('ToDoDetailsComponent', () => {
  let component: ToDoDetailsComponent;
  let fixture: ComponentFixture<ToDoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
