import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { ToDoItem } from '../model/ToDoItem';
import { TodoStoreService } from './todo-store.service';
import { TodoService } from './todo.service';

describe('TodoService', () => {

  let service: TodoService;
  let todoStoreService: TodoStoreService;
  let httpClientSpy: any;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'get', 'delete']);
    todoStoreService = new TodoStoreService();
    TestBed.configureTestingModule({
      providers:[
        TodoService,
        {provide: HttpClient, useValue: httpClientSpy}]
    });
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create todoItem via mockHttp post', () => {
    // given
    const todoItem = new ToDoItem(8,'title','decription', true);
    httpClientSpy.post.and.returnValue(of({}))

    // when
    service.create(todoItem);

    //then
    expect(httpClientSpy.post).toHaveBeenCalledWith(
      'https://localhost:44309/todos', todoItem)
    
  });

  it('should response error when create fail', () => {
    // given
    const todoItem = new ToDoItem(8,'title','decription', true);
    httpClientSpy.post.and.returnValue(throwError(()=>({errorMessage:"Created failed"})));

    // when
    service.create(todoItem);

    //then
    expect(service.errorMessage).toEqual("Created failed");
    
  });

  it('should return todoItem via mockHttp get by id', () => {
    // given
    let id = 8;
    var todoItem = new ToDoItem(id,'title','decription', true);

    // when
    service.findById(id);

    //then
    expect(httpClientSpy.get).toHaveBeenCalledWith(
      'https://localhost:44309/todos/8')
  });

  it('should delete todoItem via mockHttp get by id', () => {
    // given
    let id = 8;
    var todoItem = new ToDoItem(id,'title','decription', true);

    // when
    service.delete(id);

    //then
    expect(httpClientSpy.delete).toHaveBeenCalledWith(
      'https://localhost:44309/todos?id=8')
  });
});
