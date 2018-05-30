import { Component, OnInit, Inject } from "@angular/core";
import { Todo } from "./todo.model";
import { TodoService } from "./todo.service";
import { ObserveOnMessage } from "rxjs/operators/observeOn";


@Component({
    selector:'my-todo',
    templateUrl:'./todo.component.html',
    styleUrls:['./todo.component.scss'],
})

export class TodoComponent implements OnInit{
    todos:Todo[]=[];
    desc='';

    constructor(
         private service:TodoService
    ){}

    ngOnInit(){
        this.getTodos();
    }


    //获取todos
    getTodos():void{
        this.service.getTodos()
            .subscribe(todos=>this.todos=todos);
    }

    //添加todo
    addTodo(){
        this.service
            .addTodo(this.desc)
            .subscribe(todo=>{
                this.todos=[...this.todos,todo]
                this.desc='';
            })
    }

    //删除todo
    removeTodo(todo:Todo){
        const i = this.todos.indexOf(todo);
        this.service.deleteTodoById(todo.id).subscribe(res=>{
            this.todos=[
                ...this.todos.slice(0,i),
                ...this.todos.slice(i+1)
            ];
        });
    }

    onTextChanges(value){
        this.desc=value;
    }

}