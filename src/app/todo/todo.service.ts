import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'

import { Todo } from './todo.model';
import { UUID } from 'angular2-uuid';


const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':'my-auth-token'
  })
}

@Injectable()
export class TodoService {
  //定义API地址
  private api_url = 'http://localhost:3000/todos';
  constructor(
    private http:HttpClient
  ) { }

  //GET /todos
  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.api_url)
  }

  //POST /todos
  addTodo(desc:string):Observable<Todo>{
    let todo = {
      id:UUID.UUID(),
      desc:desc,
      completed:false
    };
    return this.http.post<Todo>(this.api_url,todo,httpOptions)
  }

  //DELETE /todos/:id
  deleteTodoById(id:string):Observable<{}>{
    const url = `${this.api_url}/${id}`;
    return this.http.delete(url,httpOptions)
  }


  //PUT 
  // toggleTodo(todo:Todo):Observable<Todo>{

  // }



}
