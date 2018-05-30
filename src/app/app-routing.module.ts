import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { NgModule } from '@angular/core';

const routes:Routes=[
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'todo',
        redirectTo:'todo'
    },
    {
        path:'',
        redirectTo:'todo',
        pathMatch:'full',
    },
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{}