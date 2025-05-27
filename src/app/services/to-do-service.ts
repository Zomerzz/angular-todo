import { Injectable } from "@angular/core";
import { ToDo } from "../models/to-do";

@Injectable({
    providedIn: "root"
})
export class ToDoService {
    toDoList: ToDo[] = [
        {
            toDoId: 1,
            title: "Aggiornare Git",
            description: "finire i progetti",
            deadline: undefined,
            creationDate: new Date().toISOString().split('T')[0],
            completedDate: undefined,
            isCompleted: false,
            categoryId: 1
        },
        {
            toDoId: 2,
            title: "Studiare",
            description: "studiare matematica",
            deadline: undefined,
            creationDate: new Date().toISOString().split('T')[0],
            completedDate: undefined,
            isCompleted: false,
            categoryId: 2
        },
        {
            toDoId: 3,
            title: "Finire il progetto",
            description: "finire il to do list",
            deadline: undefined,
            creationDate: new Date().toISOString().split('T')[0],
            completedDate: undefined,
            isCompleted: false,
            categoryId: 3
        }
    ]

    getToDos():ToDo[]{
        return this.toDoList;
    }
    deleteToDo(obj: {toDoId: number, title: string}): boolean{
        let lengthArr = this.toDoList.length;
        this.toDoList=this.toDoList.filter(e => e.toDoId != obj.toDoId);
        return lengthArr != this.toDoList.length;
    }

}