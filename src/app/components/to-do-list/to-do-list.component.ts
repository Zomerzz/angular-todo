import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToDoService } from '../../services/to-do-service';
import { ToDo } from '../../models/to-do';
import { ToDoCardComponent } from '../to-do-card/to-do-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-do-list',
  imports: [CommonModule, RouterModule, ToDoCardComponent],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent implements OnInit {
  toDoList: ToDo[] = [];
  constructor(private _toDoService: ToDoService){

  }
  ngOnInit(): void {
      console.log("Pippo2")
      this._toDoService.findAll().subscribe({
      next: list =>  this.toDoList = list,
      error: e => console.log("Pippo")
      //alert(`upsi errore nel caricamento ${e}`)
    });
  }
  handleDelete(obj: {toDoId: number, title: string}): void{
    this._toDoService.deleteToDo(obj.toDoId).subscribe({
      next: isDeleted => {
        if(isDeleted){
          alert("Dato cancellato");
          this.toDoList = this.toDoList.filter(t => t.toDoId != obj.toDoId);
        } else{
          alert("sono entrato nell'else");
        }
      },
      error: e =>{ 
        alert(`upsi errore nel nella cancellazione dati  ${e} \n per id ${obj.toDoId}`);
        //this.ngOnInit();
    }
    });
    // if (this._toDoService.deleteToDo(obj.toDoId)) {
    //   this.toDoList = this.toDoList.filter(t => t.toDoId != obj.toDoId);
    //   alert(`ToDo: \n TodoId: ${obj.toDoId} \n title: ${obj.title}`);
    // } else{
    //   alert("Nessun elemento eliminato");
    // }
  }
}
