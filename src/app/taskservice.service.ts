import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

  viewUrl:string;
  addUrl:string;
  updateUrl:string;
  taskdesItemUrl:string;

  deleteTaskUrl:string;
  

  http:HttpClient;

  constructor(http:HttpClient) { 
    this.http = http;
    this.viewUrl ='http://localhost:8080/getAllTask';
    this.addUrl = 'http://localhost:8080/addTask';
    this.updateUrl = 'http://localhost:8080/updateTask';
    this.taskdesItemUrl = 'http://localhost:8080/task';
    this.deleteTaskUrl = 'http://localhost:8080/delete';  
    

  }
  public viewAllTask(): Observable<Task[]>{
    return this.http.get<Task[]>(this.viewUrl);
  }
  public addTask(task:Task){
    return this.http.post<Task>(this.addUrl,task);
  }
  public updateTask(task:Task): Observable<Task>{
    return this.http.put<Task>(this.updateUrl,task);
  }

  public getAllTask(id: number): Observable<Task> {
      return this.http.get<Task>(`${this.taskdesItemUrl}/${id}` );
  }
  public delete(id: number): Observable<String>{
    return this.http.delete<String>(`${this.deleteTaskUrl}/${id}`);
  }
  }
