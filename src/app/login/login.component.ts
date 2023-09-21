// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { LoginService } from '../login.service';

// import {MatIconModule} from '@angular/material/icon';
// import {MatTooltipModule} from '@angular/material/tooltip';
// import {MatButtonModule} from '@angular/material/button';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']

  

// })

// export class LoginComponent {
//   username = '';
//   password = '';

//   constructor(private router: Router,private service:LoginService) {}
//   user:any;

//   login() {
//     this.user=this.service.getLogin(this.username);
//     // Perform actual login logic here (e.g., validate credentials)
//     if (this.username === this.user.emailid && this.password === this.user.password) {
//       // alert('successful login');

//       // Navigate to the dashboard after successful login
//        // this.router.navigate(['/dashboard']);

//        this.router.navigate(['/todolist']);


//     } else {
//       // Handle failed login
//       alert('Invalid username or password');
//     }
//   }
// }
// --------------------------------
// =================================

import { Component } from '@angular/core';
import { Login } from '../login';
import { LoginserviceService } from '../loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  service:LoginserviceService;
   login: Login;
   redirectView: string;
   response : string;
   constructor(service:LoginserviceService,private router:Router){
    this.service = service;
     this.login = new Login();
     this.redirectView = "";
     this.response = "";
   }
   checkLogin(){
    this.service.Login(this.login).subscribe((data) =>{      
      if(data.userid>0)
      {
        localStorage.setItem("userid",data.emailid)
        sessionStorage.setItem("User", JSON.stringify(data));
        this.router.navigate(['/viewalltaskh']);
       // this.redirectToView("userLoginHomePage");
      }
      else{
        alert('Invalid credentials!');
        this.redirectToView("login");
      }
    });
  }

  redirectToView(view : string){
    this.router.navigate([view]).then(()=>{
      window.location.reload();
    });
  }
}
