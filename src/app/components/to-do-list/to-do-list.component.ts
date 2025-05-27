import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToDoService } from '../../services/to-do-service';
import { ToDo } from '../../models/to-do';
import { ToDoCardComponent } from '../to-do-card/to-do-card.component';

@Component({
  selector: 'app-to-do-list',
  imports: [RouterModule, ToDoCardComponent],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent implements OnInit {
  toDoList: ToDo[] = [];

  constructor(private _toDoService: ToDoService){

  }
  ngOnInit(): void {
    this.toDoList = this._toDoService.getToDos();
  }

  
}
