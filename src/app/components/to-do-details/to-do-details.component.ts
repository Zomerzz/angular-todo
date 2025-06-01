import { Component, inject } from '@angular/core';
import { ToDo } from '../../models/to-do';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoService } from '../../services/to-do-service';

@Component({
  selector: 'app-to-do-details',
  imports: [],
  templateUrl: './to-do-details.component.html',
  styleUrl: './to-do-details.component.css'
})
export class ToDoDetailsComponent {
  toDo !: ToDo;
  private _route = inject(ActivatedRoute);
  private _service = inject(ToDoService);
  private _router = inject(Router);

}
