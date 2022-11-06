import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { ToDoItem } from '../../model/ToDoItem';

@Component({
  selector: 'app-todoitem-detail',
  templateUrl: './todoitem-detail.component.html',
  styleUrls: ['./todoitem-detail.component.scss']
})
export class TodoitemDetailComponent implements OnInit {

  get todoItem(): ToDoItem{
    return this.todoService.currentTodoItem();
  }

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
  }
}
