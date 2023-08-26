import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url ="http://localhost:3000/users";

  constructor(private  http:HttpClient) { }
  users()
  {
    return this.http.get(this.url);
  }
  saveUsers(data:any){
    return this.http.post(this.url,data);
  }
  updateUser(data:any){
    return this.http.put(this.url,data);
  }
}
