import { Routes, RouterModule } from "@angular/router";
import { TodoComponent } from "./todo.component";
import { NgModule } from "@angular/core";


const todoRoutes:Routes=[
    {
        path:'todo',
        redirectTo:'/alltodos'
    },
    {
        path:'alltodos',component:TodoComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(todoRoutes)
    ]
})

export class TodoRoutingModule{}