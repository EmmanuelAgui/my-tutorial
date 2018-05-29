import { Component,OnInit, Inject } from  '@angular/core';

@Component({
  selector:'my-login',
  template:`
    <div>
      <input type="text"
        [(ngModel)]="username"
      />
      <input (keyup.enter)="onClick()" type="password"
        [(ngModel)]="password"
       />
      <button (click)="onClick()">Login</button>
    </div>
  `,
  styles:[],
})

export class LoginComponent implements OnInit{
  username='';
  password='';
  constructor(@Inject('auth') private service){

  }

  ngOnInit(){}

  onClick(){
    // console.log('username:'+username +'\n\r' +'password:'+password)
    //调用service的方法
    console.info('auth result is: '+this.service.loginWithCredentials(this.username,this.password));
  }
}
