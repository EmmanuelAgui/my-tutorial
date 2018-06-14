import { Component, OnInit, Inject } from "@angular/core";
import { Todo } from "../domain/entities";
import { TodoService } from "./todo.service";


@Component({
    selector:'my-todo',
    templateUrl:'./todo.component.html',
    styleUrls:['./todo.component.scss'],
    providers:[TodoService]
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
        this.service
        .getTodos()
        .then(todos=>this.todos=[...todos]);
    }


    addTodo(){
        this.service
        .addTodo(this.desc)
        .then(todo=>{
            this.todos=[...this.todos,todo];
            this.desc='';
        });
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

    //
    toggleTodo(todo:Todo){
        //设置completed=true为选中状态
        todo.completed=true;
        //调用接口更新实体对象,
        this.service.toggleTodo(todo).subscribe(res=>{
            console.info(res);
        })
    }

    onTextChanges(value){
        this.desc=value;
    }

}