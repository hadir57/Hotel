import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon'; // Importer MatIconModule
import { LayoutComponent } from '../layout/layout.component';
import { ChambresComponent } from '../chambres/chambres.component';
import { ChambreformComponent } from '../chambreform/chambreform.component';
import { ReactiveFormsModule } from '@angular/forms'; // Importer ReactiveFormsModule
import { MatTableModule } from '@angular/material/table'; // Importer MatTableModule
import { MatSortModule } from '@angular/material/sort'; // Importer MatSortModule
import { MatDialogModule } from '@angular/material/dialog'; // Importer MatDialogModule
import { MatInputModule } from '@angular/material/input'; // Importer MatInputModule
import { NgChartsModule } from 'ng2-charts';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
  declarations: [
    AdminComponent,
    UsersPageComponent,
    LayoutComponent,
    ChambresComponent,
    ChambreformComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule, // Importez MatSidenavModule ici
    MatToolbarModule, // Importez MatToolbarModule ici
    MatButtonModule, // Importez MatButtonModule ici
    MatListModule, // Importez MatListModule ici
    MatMenuModule, 
    MatIconModule, // Ajoutez MatIconModule ici
    ReactiveFormsModule, // Ajoutez ReactiveFormsModule ici
    MatTableModule, // Ajoutez MatTableModule ici
    MatSortModule, // Ajoutez MatSortModule ici
    MatDialogModule, // Ajoutez MatDialogModule ici
    MatInputModule, // Ajoutez MatInputModule ici
    NgChartsModule,
    
  ]
})
export class AdminModule { }