import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodolistComponent } from './todolist/todolist.component';
import { RegisterComponent } from './register/register.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { ViewalltaskbyuserComponent } from './viewalltaskbyuser/viewalltaskbyuser.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';

const routes: Routes = [
  { path: 'home',component:HomeComponent},
  {path : 'login' ,component : LoginComponent},
  {path:'dashboard' ,component:DashboardComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'todolist' ,component:TodolistComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'add',component:AddtaskComponent},
  {path: 'viewalltask',component:ViewalltaskbyuserComponent},
  {path:'updatetask/:id',component:UpdatetaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
