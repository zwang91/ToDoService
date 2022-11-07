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

  findById(id: number): Observable<ToDoItem>{
    let newApi = `${this.baseApi}/${id}`;
    return this.http.get<ToDoItem>(newApi);
    }

  delete(id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseApi}?id=${id}`);
    }
  
  update(toDoItem: ToDoItem): Observable<ToDoItem>{
    return this.http.put<ToDoItem>(this.baseApi, toDoItem)
  }
}
