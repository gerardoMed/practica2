import { Injectable } from '@angular/core';
import{User} from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url:string="http://localhost:3000/Usuarios";

  constructor(private httpclient:HttpClient) { 

  }
  getuser():Observable<User[]>
  {
    return this.httpclient.get<User[]>("http://localhost:3000/Usuarios");
  }
  addUser(usuario:User):Observable<User>{
    return this.httpclient.post<User>("http://localhost:3000/Usuarios",usuario,{
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deluser(id:number):Observable<void>{
    return this.httpclient.delete<void>(`${this.url}/${id}`);
  }
  


  newUser():User{
    return{
      id:0,
      nombre:'',
      telefono:'',
      direccion:'',
      email:''
    };
  }

}
