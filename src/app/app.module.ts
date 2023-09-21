import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TodolistComponent } from './todolist/todolist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { ViewalltaskbyuserComponent } from './viewalltaskbyuser/viewalltaskbyuser.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TodolistComponent,
    RegisterComponent,
    HomeComponent,
    AddtaskComponent,
    UpdatetaskComponent,
    ViewalltaskbyuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSlideToggleModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
