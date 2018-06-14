import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from "@angular/router";


@Injectable()

export class AuthGuardService implements CanActivate,CanActivateChild{
    constructor(private router:Router){}

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
        //获取用户要访问的url
        let url = state.url;
        //验证是否已登录
        return this.checkLogin(url);
    }

    checkLogin(url:string):boolean{
        //如果已经登录，直接放行
        if(localStorage.getItem('userId')!==null){return true}

        //否则，存储要访问的url到本地
        localStorage.setItem('redirectUrl',url);
        //然后导航到登录页面
        this.router.navigate(['/login']);
        //返回false，取消导航
        return false;
    }

    canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
        return this.canActivate(route,state)
    }
}