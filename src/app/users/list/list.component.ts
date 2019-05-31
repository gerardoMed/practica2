import { Component, OnInit } from '@angular/core';
import{User} from '../user.model';
import{UsersService} from '../users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  usuarios:User[];

  constructor(private usuarioService:UsersService) { }

  ngOnInit() {
    this.usuarioService.getuser().subscribe(data=>this.usuarios=data);
  }
  Deleteuser(id:any){
    console.log(id);
    this.usuarioService.deluser(id).subscribe(()=>console.log(id),
    (errorr)=>console.log(errorr)
    );
  
  window.location.reload();
  }

}
