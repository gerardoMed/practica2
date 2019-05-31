import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';
import{FormsModule,ReactiveFormsModule}from '@angular/forms';

@NgModule({
  declarations: [MenuComponent, FormComponent, ListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    UsersService
  ],
  exports:[MenuComponent]
})
export class UsersModule { }
