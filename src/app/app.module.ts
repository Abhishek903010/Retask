import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { HomeComponent } from './home/home.component';


import { FilmsComponent } from './films/films.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { StarshipsComponent } from './starships/starships.component';
import {MatCardModule} from '@angular/material/card';
import{HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MoreInfoComponent,
    HomeComponent,
   
    FilmsComponent,
    VehiclesComponent,
    StarshipsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
