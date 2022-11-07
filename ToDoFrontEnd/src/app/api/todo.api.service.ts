import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoItem } from '../model/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {
  private baseApi= "https://localhost:44309/todos";
  constructor(private http: HttpClient) { }

  create(toDoItem: ToDoItem): Observable<void>{
    return this.http.post<void>(this.baseApi, toDoItem);
  }
}
