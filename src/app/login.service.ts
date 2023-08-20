import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private logins  = [
    { emailid: 'sufyaan@gmail.com', password : '786' }
  ]
  getLogin(email:any){
    return this.logins.find(x =>x.emailid === email);
  }
}
