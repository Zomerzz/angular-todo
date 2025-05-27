import { Component, Input } from '@angular/core';
import { ToDo } from '../../models/to-do';

@Component({
  selector: 'app-to-do-card',
  imports: [],
  templateUrl: './to-do-card.component.html',
  styleUrl: './to-do-card.component.css'
})
export class ToDoCardComponent {
  @Input('toDo') toDo!: ToDo;
  

}
