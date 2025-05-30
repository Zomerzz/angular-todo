import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { ToDo } from '../../models/to-do';
import { FormsModule, NgForm } from '@angular/forms';
import { ToDoService } from '../../services/to-do-service';
@Component({
  selector: 'app-add-to-do',
  imports: [RouterModule, FormsModule],
  templateUrl: './add-to-do.component.html',
  styleUrl: './add-to-do.component.css'
})
export class AddToDoComponent implements OnInit{
  private _service :ToDoService = inject(ToDoService);
  private _route = inject(ActivatedRoute);
  todo: Partial<ToDo> = {
    title: "",
    description: "",
    deadline: "",
    categoryId: 0
   };
   ngOnInit(): void {
     const id = this._route.snapshot.paramMap.get("id");
    if(id != null){
      const toDoId = Number(id);
      if(!isNaN(toDoId) &&  toDoId > 0 ){
        this.findToDO(toDoId);
      } else{
        alert("ue ciccio ce devi da un id corretto")
      }
    }
   }

   findToDO(id:number){
    this._service.findById(id).subscribe({
      next: toDoDb => this.todo = toDoDb,
      error: e => alert("todo non caricato" + e)
    });
   }

  sendForm(f : NgForm) {
    this._service.postToDo(this.todo).subscribe({
      next: newToDO => alert("toDo salvato con id "+ newToDO.toDoId),
      error: e => alert("errore nella creazione del todo " + e)
    });
  }


  
}

