import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink } from '@angular/router';
import { DetailsChambreComponent } from './details-chambre/details-chambre.component';
import { TestComponent } from './test/test.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReservationComponent } from './reservation/reservation.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatDialogModule } from '@angular/material/dialog';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { ViewComponent } from './view/view.component';
import { TypeChambreComponent } from './type-chambre/type-chambre.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SuiteReservationComponent } from './suite-reservation/suite-reservation.component';
import { ListChambreComponent } from './list-chambre/list-chambre.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutComponent } from './layout/layout.component';
import { UsersPageComponent } from './admin/users-page/users-page.component';
 // Assurez-vous que UsersPageComponent est importé

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    
    NavbarComponent,
    DetailsChambreComponent,
    TestComponent,
    ReservationComponent,
   
    ViewComponent,
    TypeChambreComponent,
    SuiteReservationComponent,
    ListChambreComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterLink,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    MatSidenavModule, // Importez MatSidenavModule ici
    MatToolbarModule, // Importez MatToolbarModule ici
    MatButtonModule, // Importez MatButtonModule ici
    MatListModule, // Importez MatListModule ici
    MatMenuModule // Importez MatMenuModule ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
