import { inject, Inject, Injectable } from "@angular/core";
import { ToDo } from "../models/to-do";
import { HttpClient } from "@angular/common/http";
import { ToDoListComponent } from "../components/to-do-list/to-do-list.component";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class ToDoService {
    private _url: string = "http://localhost:8080/api/todos";
    private _http: HttpClient = inject(HttpClient);

    findAll(): Observable<ToDo[]> {
        return this._http.get<ToDo[]>(this._url);
    }

    deleteToDo(toDoId: number): Observable<Boolean>{
        return this._http.delete<Boolean>(`${this._url}/${toDoId}`);
        // chiamata al backEnd pre fare la delete
    }

    postToDo(toDo :Partial<ToDo>): Observable<ToDo> {
        let creationDate : string = new Date().toISOString().split('T')[0];
        toDo.creationDate = creationDate;
        return this._http.post<ToDo>(this._url, toDo);
    }

    upDateToDo(toDo : ToDo): Observable<ToDo> {
        return this._http.put<ToDo>(`${this._url}/${toDo.toDoId}`, toDo);
    }

    findById(toDoId :number): Observable<ToDo> {
        return this._http.get<ToDo>(`${this._url}/${toDoId}`);
    } 

}