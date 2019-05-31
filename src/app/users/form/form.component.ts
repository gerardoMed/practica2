import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UsersService } from '../users.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  usuario:User;
  myform:FormGroup;
  constructor(private userservice:UsersService , public fb:FormBuilder) {


   }

  ngOnInit() {
    this.myform=this.fb.group({
      id:['',Validators.required],
      nombre:['',Validators.required],
      telefono:['',Validators.required],
      direccion:['',Validators.required],
      email:['',[Validators.required, Validators.email]]
    });
    this.usuario=this.userservice.newUser();
  }
  newUser():void{
    this.userservice.addUser(this.usuario).subscribe((data:User)=>{
      console.log(data);

    },(error:any)=>console.log(error)
    );
    this.usuario=this.userservice.newUser();
  }
  

}

