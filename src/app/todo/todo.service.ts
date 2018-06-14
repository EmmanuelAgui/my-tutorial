import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'

import { UUID } from 'angular2-uuid';
import { Todo } from '../domain/entities';


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
  getTodos():Promise<Todo[]>{
    const userId = +localStorage.getItem('userId');
    const url = `${this.api_url}/?userId=${userId}`;
    return this.http.get(url)
            .toPromise()
            .then(res=>res as Todo[])
            .catch(this.handleError);
  }

  //POST /todos
  addTodo(desc:string):Promise<Todo>{
    const userId:number = +localStorage.getItem('userId');
    let todo = {
      id:UUID.UUID(),
      desc:desc,
      completed:false,
      userId
    };
    return this.http.post(this.api_url,JSON.stringify(todo),{headers:httpOptions.headers})
            .toPromise()
            .then(res=> res as Todo)
            .catch(this.handleError);
  }

  //DELETE /todos/:id
  deleteTodoById(id:string):Observable<{}>{
    const url = `${this.api_url}/${id}`;
    return this.http.delete(url,httpOptions)
  }


  //PUT 
  toggleTodo(todo:Todo):Observable<Todo>{
    const url = this.api_url;
    return this.http.put<Todo>(url,todo,httpOptions)
  }


  private handleError(error:any):Promise<any>{
    console.error('An error occured:',error);
    return Promise.reject(error.message || error);
  }



}
