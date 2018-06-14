import { Routes, RouterModule } from "@angular/router";
import { TodoComponent } from "./todo.component";
import { NgModule } from "@angular/core";
import { AuthGuardService } from "../core/auth-guard.service";


const todoRoutes:Routes=[
    {
        path:'todo',
        redirectTo:'/alltodos'
    },
    {
        path:'alltodos',
        canActivate:[AuthGuardService],
        component:TodoComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(todoRoutes)
    ],
    providers:[AuthGuardService]
})

export class TodoRoutingModule{}