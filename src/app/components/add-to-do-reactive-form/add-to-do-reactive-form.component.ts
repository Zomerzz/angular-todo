import { Component,inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToDoService } from '../../services/to-do-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-to-do-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './add-to-do-reactive-form.component.html',
  styleUrl: './add-to-do-reactive-form.component.css'
})
export class AddToDoReactiveFormComponent {
  formBuilder = inject(FormBuilder);
  toDoForm:FormGroup;
  private _toDoService = inject(ToDoService);
  private _router = inject(Router);

  constructor(){
    this.toDoForm = this.formBuilder.group({
      title:  ["",[Validators.required]],
      description: ["",[Validators.required]],
      deadline: ["",[Validators.required, this.checkDateInFuture.bind(this)]],
      category: ["",[Validators.required]]
    });
  }

  checkDateInFuture(control:FormControl){
    const date = new Date(control.value);
    if(date < new Date()){
      return {
        dateInPast: true
      }
    }
    return null;
  }

  sendForm(){
    this._toDoService.postToDo(this.toDoForm.value).subscribe({
      next: toDo => {
        alert(`todo con id ${toDo.toDoId} salvato`);
        this._router.navigate([`/to-do-list`])
      },
      error: e => alert("errore nella aggiunta dello studente")
    })
  }

  get title(){
    return this.toDoForm.get("title");
  }
  get description(){
    return this.toDoForm.get("description");
  }
  get deadline(){
    return this.toDoForm.get("deadline");
  }
  get category(){
    return this.toDoForm.get("category");
  }
}
