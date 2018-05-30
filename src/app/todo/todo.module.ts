import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { TodoRoutingModule } from "./todo-routing.module";
import { TodoComponent } from "./todo.component";
import { TodoHeaderComponent } from "./todo-header/todo-header.component";
import { TodoFooterComponent } from "./todo-footer/todo-footer.component";
import { TodoService } from "./todo.service";
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';



@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        HttpClientModule,
        TodoRoutingModule
    ],
    declarations:[
        TodoComponent,
        TodoHeaderComponent,
        TodoFooterComponent,
        TodoListComponent,
        TodoItemComponent
    ],
    providers:[TodoService
        // {provide:'todoService',useClass:TodoService}
    ]
})

export class TodoModule{}