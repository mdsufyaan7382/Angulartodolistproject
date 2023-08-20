import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstproject';
  
   constructor(private route :  Router)
   {

   }
   

  btn()
  {
        this.route.navigate(['login'])
  }
  goToLogin(){
    this.route.navigate(['/login'])
  }
  goToDashboard(){
    this.route.navigate(['/dashboard'])
  }

}
