import {NgModule} from '@angular/core';
import {Route,RouterModule, Routes} from '@angular/router';
import{FormComponent} from './users/form/form.component';
import{ListComponent} from './users/list/list.component';





const routes: Routes=[
{path:'list',component:ListComponent},
{path:'form',component:FormComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}