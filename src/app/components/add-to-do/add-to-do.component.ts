import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ToDo } from '../../models/to-do';
import { NgForm } from '@angular/forms';
import { ToDoService } from '../../services/to-do-service';
@Component({
  selector: 'app-add-to-do',
  imports: [RouterModule],
  templateUrl: './add-to-do.component.html',
  styleUrl: './add-to-do.component.css'
})
export class AddToDoComponent {
  private _service :ToDoService = new ToDoService;
  todo: Partial<ToDo> = {
    title: "",
    description: "",
    deadline: "",
    categoryId: 0
   };
  sendForm(f : NgForm) {
    
  }
  
}

