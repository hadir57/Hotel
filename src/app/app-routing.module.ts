import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChambresComponent } from './chambres/chambres.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailsChambreComponent } from './details-chambre/details-chambre.component';
import { ReservationComponent } from './reservation/reservation.component';
import { TypeChambreComponent } from './type-chambre/type-chambre.component';
import { SuiteReservationComponent } from './suite-reservation/suite-reservation.component';
import { ListChambreComponent } from './list-chambre/list-chambre.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './admin/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./public/public.module').then((m) => m.PublicModule)
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule), 
    canActivate:[authGuard]
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent,
  },
  
  {
    path: 'login', 
    component: LoginComponent,
  },
  {
    path: 'chambres',
    
    component: ChambresComponent
  },
  {
    path: 'reservation',
    pathMatch: 'full',
    component: ReservationComponent
  },
  {
    path: 'reservation/:type',
    pathMatch: 'full',
    component: ReservationComponent
  },
  {
    path: 'accueil',
    pathMatch: 'full',
    component: AccueilComponent
  },
  {
    path: 'listeChambre',
   
    component: ListChambreComponent
  },
  {
    path: 'details/:id',
    pathMatch: 'full',
    component: DetailsChambreComponent
  },
  {
    path: 'suiteReservation/:type',
    component: SuiteReservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }