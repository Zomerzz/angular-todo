import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDo } from '../../models/to-do';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-to-do-card',
  imports: [RouterLink],
  templateUrl: './to-do-card.component.html',
  styleUrl: './to-do-card.component.css'
})
export class ToDoCardComponent {
  @Input('toDo') toDo!: ToDo;
  @Output('deleteToDo') delete = new EventEmitter<{toDoId: number; title:string}>();
  onDelete(){
    this.delete.emit({toDoId: this.toDo.toDoId, title: this.toDo.title});
  }
}
