import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../domain/entities";

@Injectable()
export class UserService{
    private api_url = 'http://localhost:3000/users';

    constructor(private http:HttpClient){}

    findUser(username:string):Promise<User>{
        const url = `${this.api_url}/?username=${username}`;
        return this.http.get(url)
                .toPromise()
                .then(res=>{
                    let users = res as User[];
                    return (users.length>0)?users[0]:null;
                })
                .catch(this.handleError);
    }

    private handleError(error:any):Promise<any>{
        console.error('An error occured',error);
        return Promise.reject(error.message || error);
    }
}