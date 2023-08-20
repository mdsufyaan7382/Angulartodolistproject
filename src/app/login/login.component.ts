import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

  

})

export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router,private service:LoginService) {}
  user:any;

  login() {
    this.user=this.service.getLogin(this.username);
    // Perform actual login logic here (e.g., validate credentials)
    if (this.username === this.user.emailid && this.password === this.user.password) {
      // alert('successful login');

      // Navigate to the dashboard after successful login
       // this.router.navigate(['/dashboard']);

       this.router.navigate(['/todolist']);


    } else {
      // Handle failed login
      alert('Invalid username or password');
    }
  }
}
