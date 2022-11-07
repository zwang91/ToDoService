import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { ToDoItem } from '../../model/ToDoItem';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todoitem-detail',
  templateUrl: './todoitem-detail.component.html',
  styleUrls: ['./todoitem-detail.component.scss']
})
export class TodoitemDetailComponent implements OnInit {

  get todoItem(): ToDoItem{
    return this.todoService.currentTodoItem();
  }

  constructor(public todoService: TodoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(id)
  }
}
