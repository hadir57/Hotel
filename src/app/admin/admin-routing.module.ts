import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { ChambresComponent } from '../chambres/chambres.component';

const routes: Routes = [{path:'', component: AdminComponent , children :[{ path: '',component:UsersPageComponent}]},{
  path: 'chambres',
  pathMatch: 'full',
  component: ChambresComponent
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
